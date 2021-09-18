import { Container, Typography, Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import logoLarge from 'assets/logo-large.jpeg';
import Image from 'next/image';

const titles = ['#Saubhagya', '#100bhagya', '#India100', '#India100bhagya'];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % titles.length),
      2000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        textAlign="center"
        color={index % 2 === 0 ? 'primary' : 'secondary'}
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
        }}
      >
        <TextTransition text={titles[index]} springConfig={presets.wobbly} />
      </Typography>

      <Image
        src={logoLarge}
        alt="Logo"
        height={550}
        objectFit="cover"
        objectPosition="center"
      />

      <Typography variant="h5" component="p" sx={{ mt: 4, fontWeight: 400 }}>
        India celebrated 75th Independence Day on Aug 15, 2021.
      </Typography>
      <Typography variant="h5" component="p" sx={{ mt: 1, fontWeight: 400 }}>
        In 25 years, we celebrate India at 100! The next 25 years of our active
        lives coincide with the 25 years to India100.
      </Typography>
      <Typography variant="h5" component="p" sx={{ mt: 1 }}>
        How will we contribute?
      </Typography>
    </Container>
  );
}
