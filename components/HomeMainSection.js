import { Container, Stack, Typography } from '@mui/material';

import { Box } from '@mui/system';
import { usePledgesCount } from 'store/pledge';
import Image from 'next/image';
import india from 'assets/india.png';
import skipping from 'assets/skipping.png';
import PledgeDocument from 'components/PledgeDocument';

export default function HomeMainSection() {
  const { data: count } = usePledgesCount();

  return (
    <div className="md:bg-[url('../assets/bg-image-blur.png')] bg-no-repeat md:bg-cover md:bg-top bg-center bg-contain md:h-[700px]">
      <Container sx={{ position: 'relative', pt: 20, pb: { md: 12 } }}>
        <Box
          sx={{
            position: 'relative',
            top: { xs: '30%', sm: '50%' },
            left: '50%',
            width: '90%',
            height: '90%',
            zIndex: -100,
            transform: 'translate(-50%, -50%)',
            '& img': {
              WebkitFilter:
                'contrast(0) sepia(0) hue-rotate(180deg) saturate(0%) brightness(170%)',
              filter:
                'contrast(0) sepia(0) hue-rotate(180deg) saturate(0%) brightness(170%)',
              opacity: 1,
            },
          }}
        >
          {/* <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={india}
              alt="India Landscape"
              layout="fill"
              objectFit="contain"
            />
          </Box> */}
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
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '3rem',
                md: '5rem',
              },
              color: '#FF7722',
            }}
          >
            #100bhagya
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
            color: 'black',
          }}
        >
          25 years is long enough to create a <br />
          meaningful impact, but not long <br />
          enough to wait and watch.
        </Typography>

        <Stack alignItems="center" sx={{ mt: 2 }}>
          <PledgeDocument />
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
    </div>
  );
}
