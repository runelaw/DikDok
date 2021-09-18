import { Button, Container, Typography, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Navigation from 'components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />

      <Container sx={{ pt: 16 }}>
        <Typography variant="h3" component="div" textAlign="center">
          Made a Pledge for{' '}
          <Typography variant="h3" component="span" color="primary">
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
          25 years is long enough to create a meaningful impact, but not long
          enough to wait and watch.
        </Typography>

        <Stack alignItems="center" sx={{ mt: 4 }}>
          <Button variant="contained" size="large">
            Make a Pledge Today
          </Button>
        </Stack>
      </Container>
    </>
  );
}
