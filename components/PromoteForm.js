import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { loggedIn, useAuth } from 'store/auth';
import materialRegister from 'utils/materialRegister';
import { z } from 'zod';
import SignInWithGoogle from './SignInWithGoogle';

export default function PromoteForm() {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));

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

  return <Form />;
}

const schema = z.object({
  name: z.string().min(1, { message: 'Cannot be empty' }),
});

function Form() {
  const user = useAuth(useCallback((state) => state.user, []));
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.name || '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback((state) => {
    console.log(state);
  }, []);

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
      <Button type="submit" variant="contained">
        Pledge Now
      </Button>
    </Stack>
  );
}
