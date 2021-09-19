import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { MdArrowUpward } from 'react-icons/md';
import { MdShare, MdOpenInNew } from 'react-icons/md';

export default function PledgeCard({ isDescriptionShown, title, description }) {
  return (
    <Card sx={{ display: 'flex' }}>
      <Button
        sx={{
          flexDirection: 'column',
          width: 150,
          borderRadius: 0,
          borderRight: '1px solid',
          borderColor: 'grey.300',
          flexShrink: 0,
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <MdArrowUpward size={20} />
        <Box component="span" sx={{ mt: 2 }}>
          40 Votes
        </Box>
      </Button>

      <CardContent sx={{ pt: 1, pb: 1.5 }}>
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
        >
          {title}
        </Typography>

        {isDescriptionShown && (
          <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
            {description}
          </Typography>
        )}

        <Stack direction="row" sx={{ mt: 1 }}>
          <Chip label="Education" size="small" sx={{ mr: 1 }} />
          <Chip label="Finance" size="small" />
        </Stack>
      </CardContent>

      <CardActions sx={{ alignItems: 'flex-start', px: 2, pt: 1 }}>
        <IconButton size="small">
          <MdShare />
        </IconButton>
        <IconButton size="small">
          <MdOpenInNew />
        </IconButton>
      </CardActions>
    </Card>
  );
}
