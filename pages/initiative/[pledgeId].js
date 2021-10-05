import { Container, Stack, Typography } from '@mui/material';
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
        <Typography variant="h5" textAlign="center">
          {data.title}
        </Typography>
      </Container>
    </>
  );
}
