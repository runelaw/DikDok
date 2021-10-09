import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Avatar, Button, Stack, TextField, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useAsyncFn } from 'react-use';
import { loggedIn, useAuth } from 'store/auth';
import { usePromoteIdea } from 'store/idea';
import { usePromotePledge } from 'store/pledge';
import { useCheckIfPromoted } from 'store/shared';
import { postKind } from 'utils/constant';
import materialRegister from 'utils/materialRegister';
import { z } from 'zod';
import SignInWithGoogle from './SignInWithGoogle';
import { MdCheck } from 'react-icons/md';
import ShareCardPopover from './ShareCardPopover';

export default function PromoteForm({ type, postId, title }) {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));
  const { data: isPromoted } = useCheckIfPromoted(postId, type);

  if (isLoggedIn === loggedIn.loading) {
    // Show a loading spinner.
    return null;
  }

  if (isLoggedIn === loggedIn.false) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Typography textAlign="center" color="textSecondary" sx={{ mb: 1 }}>
          You cannot promote if you are not signed in.
        </Typography>
        <SignInWithGoogle />
      </Stack>
    );
  }

  if (isPromoted) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Typography textAlign="center" color="textSecondary" sx={{ mb: 1 }}>
          You have promoted this post.
        </Typography>
        <Avatar sx={{ bgcolor: 'primary.main' }}>
          <MdCheck />
        </Avatar>

        <Typography textAlign="center" color="textSecondary" sx={{ mt: 3 }}>
          Share Now
        </Typography>
        <ShareCardPopover
          type={type}
          postId={postId}
          title={title}
          size="normal"
        />
      </Stack>
    );
  }

  return <Form type={type} postId={postId} />;
}

const schema = z.object({
  name: z.string().min(1, { message: 'Cannot be empty' }),
});

function Form({ type, postId }) {
  const user = useAuth(useCallback((state) => state.user, []));
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.name || '',
    },
    resolver: zodResolver(schema),
  });

  const promotePledge = usePromotePledge();
  const promoteIdea = usePromoteIdea();
  const [{ loading }, onSubmit] = useAsyncFn(
    async (state) => {
      switch (type) {
        case postKind.initiative:
          await promotePledge({ pledgeId: postId, name: state.name });
          return;
        case postKind.idea:
          await promoteIdea({ ideaId: postId, name: state.name });
      }
    },
    [postId, promoteIdea, promotePledge, type]
  );

  return (
    <Stack
      component="form"
      spacing={2}
      sx={{ mt: 4 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="Email"
        InputProps={{
          readOnly: true,
          disabled: true,
        }}
        size="small"
        value={user.email}
      />
      <TextField
        label="Name"
        size="small"
        {...materialRegister(register, 'name')}
      />
      <LoadingButton type="submit" variant="contained" loading={loading}>
        Pledge Now
      </LoadingButton>
    </Stack>
  );
}
