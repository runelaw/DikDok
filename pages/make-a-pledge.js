import Head from 'next/head';
import Navigation from 'components/Navigation';
import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import { MdThumbUp } from 'react-icons/md';
import Image from 'next/image';
import hundred from 'assets/100.png';

export default function MakeAPledge() {
  const name = 'Sharad Chand';

  return (
    <>
      <Head>
        <title>100bhagya - Make a Pledge</title>
      </Head>

      <Navigation />

      <Container sx={{ pt: 8, pb: 8 }}>
        <Paper>
          <Grid container>
            <Grid item xs={12} md={7} sx={{ px: 4, py: 3 }}>
              <Image
                src={hundred}
                alt="Hundred"
                width={hundred.width / 10}
                height={hundred.height / 10}
              />

              <Typography variant="h4">
                Make a Pledge for #100bhagya India
              </Typography>

              <Typography
                variant="h6"
                component="p"
                sx={{ mt: 2, mb: 2, fontWeight: 400 }}
              >
                I,{' '}
                <Chip
                  label={name}
                  size="small"
                  sx={{ fontWeight: 700, fontSize: 'h6.fontSize' }}
                />
                , hereby swear to work towards nation-building for the next 25
                years by committing myself to the cause of India100. I swear to
                spread the message among my communities about what India100
                stands for, and also endeavor involving my communities towards
                the vision of India100. I swear to uphold this pledge and
                dedicate myself towards creating Saubhagya (fortune) at a local,
                state and national level. I swear to initiate or get involved in
                activities which will feed towards the objective of transforming
                India in the next 25 years, and creating a unified force which
                dedicatedly works towards a prosperous, sustainable, inclusive,
                just and progressive India by 2047, when we complete 100 years
                of a journey as an independent republic.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              sx={{
                borderTop: {
                  xs: '1px solid #DADADA',
                  md: '0',
                },
                borderLeft: {
                  md: '1px solid #DADADA',
                },
                px: 4,
                pt: 3,
                pb: 5,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                color="primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MdThumbUp size={20} />{' '}
                <Box sx={{ ml: 1 }}>{0} pledged until now</Box>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
