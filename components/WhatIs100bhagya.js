import { Box, Container, Link, Typography } from '@mui/material';
import NLink from 'next/link';
import Twitter from './Twitter';
import ashok from 'assets/ashok.png';

export default function WhatIs100bhagya() {
  return (
    <div className="w-full px-4">
      <div className="flex md:flex-row justify-between sm:flex-col bg-gradient-to-r from-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg px-2">
        <div className="md:pl-10">
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
                  color: '#FF7722',
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
                mb: 1,
                fontSize: {
                  xs: '1rem',
                  sm: '1.2rem',
                  md: '1.4rem',
                },
              }}
            >
              India celebrated its 75th Independence Day on Aug 15, 2021. In 25
              years, we celebrate India at 100!
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
              The next 25 years of our active lives coincide with the 25 years
              to India at 100.
            </Typography>
            <div className="hidden md:block">
              <Typography
                variant="h5"
                component="p"
                sx={{
                  fontWeight: 400,
                  mt: 1,
                  fontSize: {
                    xs: '1rem',
                    sm: '1.2rem',
                    md: '1.4rem',
                  },
                }}
              >
                The aim of 100Bhagya is to act as a platform for people who want
                to bring about a change or are in the process of doing so, to
                voice their ideas and get a helpful community to back them in
                their endevour for India&apos;s Saubhagya.
              </Typography>
            </div>
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
        </div>

        <div className="md:w-3/12 sm:w-full h-full flex justify-center items-center pr-10 sm:px-2 pb-3">
          <Twitter />
        </div>
      </div>
    </div>
  );
}
