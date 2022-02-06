import { Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { usePledgesCount } from 'store/pledge';
import { LoadingButton } from '@mui/lab';
import Image from 'next/image';
import skipping from 'assets/skipping.png';

export default function HomeMainSection() {
  const { data: count } = usePledgesCount();

  return (
    <Container sx={{ position: 'relative', pt: 20, pb: { md: 12 } }}>
      <Box
        sx={{
          borderRadius: '100%',
          overflow: 'hidden',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: -1,
          transform: 'translate(-50%, -20%)',
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        <Image src={skipping} />
      </Box>

      <Box
        sx={{
          overflow: 'hidden',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          display: {
            xs: 'block',
            md: 'none',
          },
        }}
      >
        <Image src={skipping} layout="fixed" />
      </Box>

      <Typography
        variant="h1"
        component="div"
        textAlign="center"
        sx={{
          mt: -2,
          textShadow:
            '-1px 0px 0 white,' +
            ' 0px -1px 0 white,' +
            ' 0px 1px 0 white,' +
            ' 1px 0px 0 white',
          fontSize: {
            xs: '2.5rem',
            sm: '3rem',
            md: '5rem',
          },
        }}
      >
        Make a Pledge <br />
        for{' '}
        <Typography
          variant="h1"
          component="span"
          color="primary"
          sx={{
            fontSize: {
              xs: '2.5rem',
              sm: '3rem',
              md: '5rem',
            },
          }}
        >
          #India100
        </Typography>
      </Typography>
      <Typography
        variant="h6"
        component="div"
        textAlign="center"
        sx={{
          fontWeight: 'medium',
          mt: 1,
          textShadow:
            '-1px 0px 0 white,' +
            ' 0px -1px 0 white,' +
            ' 0px 1px 0 white,' +
            ' 1px 0px 0 white',
        }}
      >
        25 years is long enough to create a <br />
        meaningful impact, but not long <br />
        enough to wait and watch.
      </Typography>

      <Stack alignItems="center">
        <LoadingButton variant="contained" size="large" sx={{ mt: 2 }}>
          Pledge to #India100
        </LoadingButton>
      </Stack>

      <Stack alignItems="center" sx={{ mt: 4, pb: 6 }}>
        <Typography
          variant="h6"
          color="primary"
          textAlign="center"
          sx={{
            fontWeight: 'normal',
            bgcolor: 'primary.50',
            py: 1,
            px: 4,
            borderRadius: 2,
          }}
        >
          {count ?? 0} pledges made till now
        </Typography>
      </Stack>
    </Container>
  );
}
