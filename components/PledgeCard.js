import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { MdArrowUpward } from 'react-icons/md';

export default function PledgeCard() {
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
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            John Doe
          </Typography>

          <Typography variant="h6">
            Irure aute culpa id velit irure duis occaecat eiusmod consectetur
            aliquip esse.
          </Typography>

          <Typography>
            Ipsum minim amet voluptate laborum. Eiusmod esse occaecat ut
            cupidatat quis in exercitation Lorem consectetur mollit id officia
            voluptate Lorem. Aliquip nulla aliqua ut ea fugiat. Ut dolore duis
            esse voluptate irure aute amet officia commodo laborum labore nulla
            nisi ullamco.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
