import { Box, Container, Link, Typography } from '@mui/material';
import NLink from 'next/link';

export default function WhatIs100bhagya() {
  return (
    <Container sx={{ pb: 8 }}>
      <Typography
        variant="h2"
        component="div"
        sx={{ mt: 8, mb: 1, fontWeight: 'medium' }}
      >
        What is{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          100bhagya
        </Box>{' '}
        <br />
        (India@100)?
      </Typography>

      <Typography variant="h5" component="p" sx={{ fontWeight: 400, mt: 2 }}>
        India celebrated its 75th Independence Day on Aug 15, 2021. In 25 years,
        we celebrate India at 100!
      </Typography>
      <Typography variant="h5" component="p" sx={{ fontWeight: 400, mt: 0.25 }}>
        The next 25 years of our active lives coincide with the 25 years to
        India at 100.
      </Typography>
      <Typography variant="h5" component="p" sx={{ mt: 2, fontWeight: 400 }}>
        How will we contribute?{' '}
        <NLink href="/about" passHref>
          <Link>Read more</Link>
        </NLink>
      </Typography>
    </Container>
  );
}
