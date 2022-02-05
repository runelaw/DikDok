import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TimeCounter from 'components/TimeCounter';

export default function HomeMainSection() {
  return (
    <Container sx={{ pt: 40, pb: 24 }}>
      <Typography
        variant="h1"
        component="div"
        textAlign="center"
        sx={{ mt: -2 }}
      >
        Make a Pledge <br />
        for{' '}
        <Typography variant="h1" component="span" color="primary">
          #India100
        </Typography>
      </Typography>
      <Typography
        variant="h6"
        component="div"
        textAlign="center"
        color="textSecondary"
        sx={{ fontWeight: 400, mt: 1 }}
      >
        25 years is long enough to create a <br />
        meaningful impact, but not long <br />
        enough to wait and watch.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <TimeCounter />
        <Typography color="textSecondary" sx={{ mt: 1, textAlign: 'center' }}>
          Time is running out!
        </Typography>
      </Box>
    </Container>
  );
}
