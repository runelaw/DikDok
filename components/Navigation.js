import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import logo from 'assets/logo-large.jpeg';
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
        <Toolbar variant="dense">
          <Link href="/" passHref>
            <Button
              component="a"
              color="inherit"
              sx={{ p: 0, overflow: 'hidden' }}
            >
              <Image src={logo} alt="Logo" width={64} height={32} />
            </Button>
          </Link>

          <Button>Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
