import { Container, Link, Typography } from '@mui/material';
import HomeMainSection from 'components/HomeMainSection';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import NLink from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation position="fixed" />

      <Head>
        <title>100bhagya - Make a Pledge for #India100</title>
      </Head>

      <HomeMainSection />
      <Container sx={{ pb: 8 }}>
        <Typography variant="h5" component="div" sx={{ mt: 8, mb: 1 }}>
          What is 100bhagya (India@100)?
        </Typography>
        <Typography variant="h6" component="p" sx={{ fontWeight: 400 }}>
          India celebrated its 75th Independence Day on Aug 15, 2021. In 25
          years, we celebrate India at 100!
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: 400, mt: 0.25 }}
        >
          The next 25 years of our active lives coincide with the 25 years to
          India at 100.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ mt: 0.25, fontWeight: 400 }}
        >
          How will we contribute?{' '}
          <NLink href="/about" passHref>
            <Link>Read more</Link>
          </NLink>
        </Typography>
      </Container>
    </>
  );
}
