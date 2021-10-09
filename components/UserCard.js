import { Avatar, Button, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useCallback } from 'react';
import { loggedIn, useAuth, useLogin } from 'store/auth';

export default function UserCard({ children }) {
  const user = useAuth(useCallback((state) => state.user, []));
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));
  const login = useLogin();

  return (
    <>
      {user && (
        <Paper
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            px: 2,
            py: 1,
          }}
        >
          <Stack direction="row">
            <Avatar src={user.photoURL} alt="User Profile" />
            <Box sx={{ ml: 3 }}>
              <Typography variant="subtitle2">{user.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {user.email}
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>{children}</Box>
        </Paper>
      )}

      {isLoggedIn === loggedIn.false && (
        <Paper
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
            py: 2,
          }}
        >
          <Typography sx={{ mb: { xs: 1, md: 0 } }}>
            You need to be signed in to make a pledge.
          </Typography>
          <Button variant="contained" onClick={login}>
            Sign in with Google
          </Button>
        </Paper>
      )}
    </>
  );
}
