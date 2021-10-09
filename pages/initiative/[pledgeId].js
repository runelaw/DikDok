import { Container, Grid, Paper, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { usePledgeById } from 'store/pledge';

export default function Initiative() {
  const { query } = useRouter();
  const pledgeId = query.pledgeId;
  const { data, error } = usePledgeById(pledgeId);

  if (error || !data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>100bhagya - {data.title}</title>
      </Head>

      <Navigation />

      <Container sx={{ pt: 8, pb: 8 }}>
        <Paper sx={{ px: 4, py: 3 }}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography variant="h5">{data.title}</Typography>
              <Typography sx={{ mt: 1 }}>{data.description}</Typography>

              <Typography
                component="p"
                variant="caption"
                color="textSecondary"
                sx={{ mt: 2 }}
              >
                Posted by
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Sharad Chand
              </Typography>
            </Grid>

            <Grid item md={6}></Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
