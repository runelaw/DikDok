import { Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TimeCounter from 'components/TimeCounter';
import PledgeForm from 'components/PledgeForm';
import { usePledgesCount } from 'store/pledge';

export default function HomeMainSection() {
  const { data: count } = usePledgesCount();

  return (
    <Container sx={{ pt: 20, pb: { md: 12 } }}>
      <Typography
        variant="h1"
        component="div"
        textAlign="center"
        sx={{
          mt: -2,
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
        color="textSecondary"
        sx={{ fontWeight: 400, mt: 1 }}
      >
        25 years is long enough to create a <br />
        meaningful impact, but not long <br />
        enough to wait and watch.
      </Typography>

      <PledgeForm />

      <Box sx={{ mt: 4 }}>
        <TimeCounter />
        <Typography color="textSecondary" sx={{ mt: 1, textAlign: 'center' }}>
          Time is running out!
        </Typography>
      </Box>

      <Stack alignItems="center" sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          color="primary"
          textAlign="center"
          sx={{
            fontWeight: 'normal',
            bgcolor: 'primary.50',
            py: 2,
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
