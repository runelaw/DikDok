import { Avatar, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useCallback } from 'react';
import { useAuth } from 'store/auth';

export default function UserCard() {
  const user = useAuth(useCallback((state) => state.user, []));

  return user ? (
    <Paper sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1 }}>
      <Avatar src={user.photoURL} alt="User Profile" />
      <Box sx={{ ml: 3 }}>
        <Typography variant="subtitle2">{user.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {user.email}
        </Typography>
      </Box>
    </Paper>
  ) : null;
}
