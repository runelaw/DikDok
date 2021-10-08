import { Container, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import PledgeCard from 'components/PledgeCard';
import Head from 'next/head';
import { useAllPledges } from 'store/pledge';

export default function Initiatives() {
  const { data: pledges } = useAllPledges();

  return (
    <>
      <Navigation />

      <Head>
        <title>100bhagya - Initiatives</title>
      </Head>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" textAlign="center">
          Initiatives
        </Typography>
        <Typography textAlign="center" color="textSecondary">
          Latest initiatives that everybody has pledged to.
        </Typography>

        <Stack spacing={2} sx={{ mt: 2 }}>
          {(pledges ?? []).map((it) => (
            <PledgeCard
              key={it.id}
              title={it.title}
              description={it.description}
              link={it.link}
              tags={it.tags}
              pledgeId={it.id}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}
