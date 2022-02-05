import { Box, Container, Link, Typography } from '@mui/material';
import NLink from 'next/link';

export default function WhatIs100bhagya() {
  return (
    <Container sx={{ pb: 8 }}>
      <Typography
        variant="h2"
        component="div"
        sx={{
          mt: 8,
          mb: 1,
          fontWeight: 'medium',
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '3rem',
          },
        }}
      >
        What is{' '}
        <Box
          component="span"
          sx={{
            color: 'primary.main',
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '3rem',
            },
          }}
        >
          100bhagya
        </Box>{' '}
        <br />
        (India@100)?
      </Typography>

      <Typography
        variant="h5"
        component="p"
        sx={{
          fontWeight: 400,
          mt: 2,
          fontSize: {
            xs: '1rem',
            sm: '1.2rem',
            md: '1.4rem',
          },
        }}
      >
        India celebrated its 75th Independence Day on Aug 15, 2021. In 25 years,
        we celebrate India at 100!
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontWeight: 400,
          mt: 0.25,
          fontSize: {
            xs: '1rem',
            sm: '1.2rem',
            md: '1.4rem',
          },
        }}
      >
        The next 25 years of our active lives coincide with the 25 years to
        India at 100.
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          mt: 2,
          fontWeight: 400,
          fontSize: {
            xs: '1rem',
            sm: '1.2rem',
            md: '1.4rem',
          },
        }}
      >
        How will we contribute?{' '}
        <NLink href="/about" passHref>
          <Link>Read more</Link>
        </NLink>
      </Typography>
    </Container>
  );
}
