import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
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
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <Link href="/" passHref>
            <Button
              component="a"
              color="inherit"
              sx={{ p: 0, overflow: 'hidden' }}
            >
              <Image src={logo} alt="Logo" width={64} height={32} />
            </Button>
          </Link>

          <Stack direction="row">
            <Button variant="outlined" sx={{ mr: 2 }}>
              Make a Pledge
            </Button>
            <Button>Login</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
