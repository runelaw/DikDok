import { Button, Stack, TextField } from '@mui/material';
import { useCallback } from 'react';
import { loggedIn, useAuth } from 'store/auth';

export default function PledgeForm() {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));
  const user = useAuth(useCallback((state) => state.user, []));

  if (isLoggedIn === loggedIn.loading) {
    // Show a loading spinner.
    return null;
  }

  if (isLoggedIn === loggedIn.false) {
    // TODO: Show not logged in button.
    return null;
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
