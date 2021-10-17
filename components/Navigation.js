import { AppBar, Button, Container, Stack, Toolbar, Box } from '@mui/material';
import logo from 'assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { loggedIn, useAuth } from 'store/auth';
import ProfileButton from './ProfileButton';
import SignInWithGoogle from './SignInWithGoogle';

export default function Navigation({ position = 'sticky' }) {
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
            <Link href="/ideas" passHref>
              <Button
                component="a"
                variant="contained"
                color="inherit"
                sx={{ mr: 2 }}
              >
                Explore Ideas
              </Button>
            </Link>

            <Link href="/about" passHref>
              <Button
                component="a"
                variant="contained"
                color="inherit"
                sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
              >
                About Us
              </Button>
            </Link>

            {isLoggedIn === loggedIn.true && <ProfileButton />}
            {isLoggedIn === loggedIn.false && (
              <>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <SignInWithGoogle />
                </Box>

                <Box sx={{ display: { md: 'none' } }}>
                  <SignInWithGoogle>Sign In</SignInWithGoogle>
                </Box>
              </>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
