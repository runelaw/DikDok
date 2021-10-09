import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { MdThumbUp } from 'react-icons/md';

export default function PromoteButton({ count }) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: 100,
        width: 120,
        p: 0,
        color: 'grey.800',
      }}
    >
      <MdThumbUp size={20} />
      <Box component="span" sx={{ mt: 0.5 }}>
        {count} Promoters
      </Box>
    </Stack>
  );
}
