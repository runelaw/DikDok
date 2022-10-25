import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import Image from 'next/image';
import green from 'assets/green.png';
import orange from 'assets/orange.png';
import PledgeDocument from 'components/PledgeDocument';

export default function About() {
  return (
    <>
      <Navigation />

      <Head>
        <title>100bhagya - Make a Pledge for #India100</title>
      </Head>

      <Box
        sx={{
          width: '100%',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: '0%',
            right: -150,
            zIndex: -100,
            transform: 'translate(0, 0)',
          }}
        >
          <Image
            src={orange}
            alt="Green"
            layout="fixed"
            width={orange.width / 1.5}
            height={orange.height / 1.5}
          />
        </Box>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            right: -150,
            zIndex: -100,
            transform: 'translate(0, 0%)',
          }}
        >
          <Image
            src={green}
            alt="Green"
            layout="fixed"
            width={green.width / 1.5}
            height={green.height / 1.5}
          />
        </Box>
        <Container
          sx={{
            pt: 16,
            pb: 8,
            width: '100%',
          }}
        >
          <Typography variant="h4">
            100bhagya, Saubhagya /{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Preamble and Vision
            </Box>
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              mt: 2,
            }}
          >
            India celebrated 75th Independence Day on Aug 15, 2021. In 25 years,
            we celebrate India at 100! The next 25 years of our active lives
            coincide with the 25 years to India100. How will we contribute?
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              mt: 4,
            }}
          >
            {'"'}25 years is long enough to create a meaningful impact, but not
            long enough to wait and watch.{'"'}
          </Typography>

          <Typography variant="h4" sx={{ mt: 4 }}>
            <Box component="span" sx={{ color: 'primary.main' }}>
              Launching
            </Box>{' '}
            100bhagya, India!
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              mt: 2,
            }}
          >
            100bhagya, India 100 is a unifying movement to integrate all people
            and ideas working towards India&apos;s betterment in the next 25
            years. The vision is a 100 Crore people unified and working together
            for building a conscious, sustainable and prosperous nation.
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              mt: 1,
              ml: 2,
            }}
          >
            ● Platform to share and engage with ideas to support idea
            development and collaboration across key themes for India 100.{' '}
            <br />● A showcase of ideas with unrelenting potential and impact
            created by individuals/teams.
          </Typography>

          <Typography variant="h4" sx={{ mt: 4 }}>
            <Box component="span" sx={{ color: 'primary.main' }}>
              Why 100bhagya!
            </Box>{' '}
            Why Now!
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              mt: 1,
              ml: 2,
            }}
          >
            ● At 140 Crores, we are 1/6th of this world.
            <br />
            ● With 60% of the population between 15-54 years, we have the
            largest number of active minds and energies.
            <br />● The next 25 years of our active lives coincide with the 25
            years to India100. How will we contribute? This is our
            responsibility and Saubhagya(fortune) to participate and contribute
            to the Saubhagya, India100 movement.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <PledgeDocument />
            <Button
              component="a"
              href="https://tally.so/r/mDyQX3"
              variant="contained"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
            >
              Become a part
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
