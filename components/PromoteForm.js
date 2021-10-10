import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Avatar, Stack, TextField, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { MdCheck } from 'react-icons/md';
import { useAsyncFn } from 'react-use';
import { loggedIn, useAuth } from 'store/auth';
import { useCheckIfPromoted, usePromoteIdea } from 'store/idea';
import materialRegister from 'utils/materialRegister';
import { z } from 'zod';
import ShareCardPopover from './ShareCardPopover';
import SignInWithGoogle from './SignInWithGoogle';

export default function PromoteForm({ postId, title }) {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));
  const { data: isPromoted } = useCheckIfPromoted(postId);

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
        <ShareCardPopover postId={postId} title={title} size="normal" />
      </Stack>
    );
  }

  return <Form postId={postId} />;
}

const schema = z.object({
  name: z.string().min(1, { message: 'Cannot be empty' }),
});

function Form({ postId }) {
  const user = useAuth(useCallback((state) => state.user, []));
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.name || '',
    },
    resolver: zodResolver(schema),
  });

  const promoteIdea = usePromoteIdea();
  const [{ loading }, onSubmit] = useAsyncFn(
    async (state) => {
      await promoteIdea({ ideaId: postId, name: state.name });
    },
    [postId, promoteIdea]
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
        Promote Now
      </LoadingButton>
    </Stack>
  );
}
