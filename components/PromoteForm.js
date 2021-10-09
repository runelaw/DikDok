import { Button, Stack, TextField, Typography } from '@mui/material';
import { useCallback } from 'react';
import { loggedIn, useAuth } from 'store/auth';
import SignInWithGoogle from './SignInWithGoogle';

export default function PromoteForm() {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));
  const user = useAuth(useCallback((state) => state.user, []));

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

  return (
    <Stack spacing={2} sx={{ mt: 3 }}>
      <TextField
        label="Email"
        InputProps={{
          readOnly: true,
          disabled: true,
        }}
        size="small"
        value={user?.email}
      />
      <TextField label="Name" size="small" />
      <Button variant="contained">Pledge Now</Button>
    </Stack>
  );
}
