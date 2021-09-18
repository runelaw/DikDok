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

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          height: 600,
          overflow: 'hidden',
          borderRadius: 4,
        }}
      >
        <Image src={logoLarge} alt="Logo" />
      </Stack>
    </Container>
  );
}
