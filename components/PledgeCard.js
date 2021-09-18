import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { MdArrowUpward } from 'react-icons/md';

export default function PledgeCard({ isDescriptionShown }) {
  return (
    <Card sx={{ display: 'flex' }}>
      <Button
        sx={{
          flexDirection: 'column',
          width: 200,
          borderRadius: 0,
          borderRight: '1px solid',
          borderColor: 'grey.300',
        }}
      >
        <MdArrowUpward size={20} />
        <Box component="span" sx={{ mt: 2 }}>
          40 Votes
        </Box>
      </Button>

      <Box>
        <CardContent sx={{ py: 1 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            John Doe
          </Typography>

          <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
            Irure aute culpa id velit irure duis occaecat eiusmod consectetur
            aliquip esse.
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
        <CardActions sx={{ justifyContent: 'space-between', px: 2, pt: 0 }}>
          <Button size="small">Open Link</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
