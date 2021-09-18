import { Button, Container, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import PledgeCard from 'components/PledgeCard';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Navigation />
      <Head>
        <title>100bhagya - Made a Pledge for #India100</title>
      </Head>

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

        <Stack alignItems="center" sx={{ mt: 8 }}>
          <Button variant="contained" size="large">
            Make a Pledge Today
          </Button>
          <Typography color="textSecondary" sx={{ mt: 1 }}>
            “The future depends on what you do today.” - Gandhi
          </Typography>
        </Stack>

        <Typography variant="h5" component="div" sx={{ mt: 20, mb: 3 }}>
          What pledges did people make?
        </Typography>
        <PledgeCard isDescriptionShown />
        <Stack direction="row" spacing={4} mt={4}>
          <PledgeCard />
          <PledgeCard />
        </Stack>

        <Typography variant="h5" component="div" sx={{ mt: 12, mb: 1 }}>
          Our Vision
        </Typography>
        <Typography variant="h6" component="p" sx={{ fontWeight: 400 }}>
          India celebrated 75th Independence Day on Aug 15, 2021.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: 400, mt: 0.25 }}
        >
          In 25 years, we celebrate India at 100! The next 25 years of our
          active lives coincide with the 25 years to India100.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="primary"
          sx={{ mt: 0.25 }}
        >
          How will we contribute?
        </Typography>
      </Container>
    </>
  );
}
