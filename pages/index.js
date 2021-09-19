import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Navigation from 'components/Navigation';
import PledgeCard from 'components/PledgeCard';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import india from 'assets/india.png';
import hundred from 'assets/100.png';

export default function Home() {
  return (
    <>
      <Navigation />

      <Head>
        <title>100bhagya - Made a Pledge for #India100</title>
      </Head>

      <Container sx={{ pb: 8, position: 'relative' }}>
        <Box
          sx={{
            '& img': {
              '-webkit-filter':
                'contrast(0) sepia(0) hue-rotate(180deg) saturate(0%) brightness(170%)',
              filter:
                'contrast(0) sepia(0) hue-rotate(180deg) saturate(0%) brightness(170%)',
              opacity: 1,
            },
          }}
        >
          <Image src={india} alt="India" />
        </Box>

        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
          <Stack sx={{ alignItems: 'center', mt: 20 }}>
            <Image
              src={hundred}
              alt="Hundred"
              width={hundred.width / 7}
              height={hundred.height / 7}
            />
          </Stack>

          <Typography
            variant="h3"
            component="div"
            textAlign="center"
            sx={{ mt: -2 }}
          >
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
            <Link href="/make-a-pledge" passHref>
              <Button component="a" variant="contained" size="large">
                Make a Pledge Today
              </Button>
            </Link>
            <Typography color="textSecondary" sx={{ mt: 1 }}>
              “The future depends on what you do today.” - Gandhi
            </Typography>
          </Stack>
        </Box>

        <Typography variant="h5" component="div" sx={{ mt: 8, mb: 3 }}>
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
