import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Navigation from 'components/Navigation';
import PledgeForm from 'components/PledgeForm';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MdThumbUp } from 'react-icons/md';
import { pledgeTags, usePledgeById } from 'store/pledge';

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
              <Typography variant="h4">{data.title}</Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ mt: 1, fontWeight: 400 }}
              >
                {data.description}
              </Typography>

              <Stack direction="row" sx={{ mt: 1 }}>
                {/* TODO: Use common tags between ideas and pledges. */}
                {data.tags.map((it, index) => (
                  <Chip
                    key={it}
                    label={pledgeTags[it]}
                    size="small"
                    sx={{ mr: index !== data.tags.length - 1 ? 1 : 0 }}
                  />
                ))}
              </Stack>

              <Typography component="p" variant="caption" sx={{ mt: 2 }}>
                Posted by
              </Typography>
              <Typography variant="body2">Sharad Chand</Typography>
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
                  {data.promoterCount ?? 0} promoters until now
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
