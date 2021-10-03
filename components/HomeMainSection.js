import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import hundred from 'assets/100.png';
import indiaLandscape from 'assets/india-landscape.png';
import FlipCounter from 'components/FlipCounter';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeMainSection() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -100,
        }}
      >
        <Image
          src={indiaLandscape}
          alt="India Landscape"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Container sx={{ pt: 4, pb: 12 }}>
        <Stack
          sx={{
            alignItems: 'center',
            mt: 20,
          }}
        >
          <Box
            sx={{
              maxWidth: hundred.width / 7,
              maxHeight: hundred.height / 7,
              width: '100%',
              height: '100%',
            }}
          >
            <Image src={hundred} alt="Hundred" layout="responsive" />
          </Box>
        </Stack>

        <Typography
          variant="h3"
          component="div"
          textAlign="center"
          sx={{ mt: -2 }}
        >
          Make a Pledge for{' '}
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
          <Typography color="white" sx={{ mt: 1, textAlign: 'center' }}>
            “The future depends on what you do today.” - Gandhi
          </Typography>
        </Stack>

        <Box sx={{ mt: 4 }}>
          <FlipCounter />
          <Typography color="white" sx={{ mt: 1, textAlign: 'center' }}>
            Time is running out.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
