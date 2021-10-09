import { Button } from '@mui/material';
import { useLogin } from 'store/auth';

export default function SignInWithGoogle() {
  const login = useLogin();

  return (
    <Button variant="contained" onClick={login}>
      Sign in with Google
    </Button>
  );
}
