import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material';
import logo from 'assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: '1px solid', borderColor: 'grey.400' }}
    >
      <Container>
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <Link href="/" passHref>
            <Button
              component="a"
              color="inherit"
              sx={{ p: 0, py: 0.5, overflow: 'hidden' }}
            >
              <Image
                src={logo}
                alt="Logo"
                width={logo.width / 30}
                height={logo.height / 30}
              />
            </Button>
          </Link>

          <Stack direction="row">
            <Link href="/make-a-pledge" passHref>
              <Button component="a" variant="outlined" sx={{ mr: { md: 2 } }}>
                Ideas
              </Button>
            </Link>

            <Link href="/make-a-pledge" passHref>
              <Button component="a" variant="outlined" sx={{ mr: { md: 2 } }}>
                Thought Space
              </Button>
            </Link>

            <Button sx={{ display: { xs: 'none', md: 'flex' } }}>Login</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
