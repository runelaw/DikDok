import { Container, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useIdeaById } from 'store/idea';

export default function Initiative() {
  const { query } = useRouter();
  const ideaId = query.ideaId;
  const { data, error } = useIdeaById(ideaId);

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
        <Typography>{data.description}</Typography>
      </Container>
    </>
  );
}
