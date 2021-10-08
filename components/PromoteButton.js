import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { MdThumbUp } from 'react-icons/md';

export default function PromoteButton({ count, isPromoted }) {
  return (
    <Button
      sx={{
        flexDirection: 'column',
        height: 100,
        width: 120,
        p: 0,
      }}
      color={isPromoted ? 'primary' : 'inherit'}
    >
      <MdThumbUp size={20} />
      <Box component="span" sx={{ mt: 0.5 }}>
        {count} Promoters
      </Box>
    </Button>
  );
}
