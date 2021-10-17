import { Card, Stack, Typography } from '@mui/material';
import { IoMdSad } from 'react-icons/io';

export default function EmptyIdeas() {
  return (
    <Card sx={{ width: '100%', px: 4, py: 4, mt: 1 }} elevation={0}>
      <Stack alignItems="center" sx={{ color: 'grey.600' }}>
        <Typography variant="h4" component="div">
          <IoMdSad />
        </Typography>
        <Typography>There are no ideas yet.</Typography>
      </Stack>
    </Card>
  );
}
