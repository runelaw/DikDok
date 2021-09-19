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

export default function PledgeCard({ isDescriptionShown }) {
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
        }}
      >
        <MdArrowUpward size={20} />
        <Box component="span" sx={{ mt: 2 }}>
          40 Votes
        </Box>
      </Button>

      <CardContent sx={{ pt: 1, pb: 1.5 }}>
        <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
          Irure aute culpa id velit irure duis occaecat eiusmod consectetur.
        </Typography>

        {isDescriptionShown && (
          <Typography>
            Ipsum minim amet voluptate laborum. Eiusmod esse occaecat ut
            cupidatat quis in exercitation Lorem consectetur mollit id officia
            voluptate Lorem.
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
