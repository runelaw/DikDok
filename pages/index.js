import { Button, Container, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import PledgeCard from 'components/PledgeCard';

export default function Home() {
  return (
    <>
      <Navigation />

      <Container sx={{ pt: 20, pb: 8 }}>
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

        <Typography variant="h5" component="div" sx={{ mt: 20, mb: 3 }}>
          What pledges did people make?
        </Typography>
        <PledgeCard isDescriptionShown />
        <Stack direction="row" spacing={4} mt={4}>
          <PledgeCard />
          <PledgeCard />
        </Stack>
      </Container>
    </>
  );
}
