import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import PledgeForm from 'components/PledgeForm';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MdThumbUp } from 'react-icons/md';
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

            <Grid item md={6}>
              <Typography
                variant="h6"
                component="p"
                color="primary"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <MdThumbUp size={20} />{' '}
                <Box sx={{ ml: 1 }}>
                  {data.promoters?.length ?? 0} promoters until now
                </Box>
              </Typography>

              <PledgeForm />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
