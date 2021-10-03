import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material';
import logo from 'assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { loggedIn, useAuth, useLogin } from 'store/auth';
import ProfileButton from './ProfileButton';

export default function Navigation({ position = 'sticky' }) {
  const login = useLogin();
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));

  return (
    <AppBar position={position} color="transparent" elevation={0}>
      <Container sx={{ px: 0 }}>
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

          <Stack direction="row" alignItems="center">
            <Link href="/make-a-pledge" passHref>
              <Button
                component="a"
                variant="contained"
                color="inherit"
                sx={{ mr: 2 }}
              >
                Initiatives
              </Button>
            </Link>

            <Link href="/make-a-pledge" passHref>
              <Button
                component="a"
                variant="contained"
                color="inherit"
                sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}
              >
                Thought Space
              </Button>
            </Link>

            {isLoggedIn === loggedIn.true && <ProfileButton />}

            {isLoggedIn === loggedIn.false && (
              <Button
                variant="contained"
                sx={{ display: { xs: 'none', md: 'flex' } }}
                onClick={login}
              >
                Sign in with Google
              </Button>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
