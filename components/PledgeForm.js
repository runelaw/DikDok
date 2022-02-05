import { Box, Button, Stack, TextField } from '@mui/material';

export default function PledgeForm() {
  return (
    <Stack alignItems="center" sx={{ mt: 4 }}>
      <Stack spacing={2} maxWidth={400} width="100%">
        <TextField placeholder="Your Name" size="small" />
        <TextField placeholder="Email" size="small" />
        <Button variant="contained">Pledge to #India100</Button>
      </Stack>
    </Stack>
  );
}
