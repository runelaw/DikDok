import { AppBar, Button, Container, Toolbar } from '@mui/material';
import logo from 'assets/logo-english.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation({ position = 'sticky' }) {
  return (
    <AppBar position={position} color="transparent" elevation={0}>
      <Container sx={{ px: 0 }}>
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <Link href="/" passHref>
            <Button
              component="a"
              color="inherit"
              sx={{
                p: 0,
                py: 0.5,
                overflow: 'hidden',
                height: 64,
              }}
            >
              <Image
                src={logo}
                alt="Logo"
                width={logo.width / 25}
                height={logo.height / 25}
              />
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button
              component="a"
              variant="contained"
              color="inherit"
              sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
            >
              About
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
