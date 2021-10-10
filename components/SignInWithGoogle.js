import { Button } from '@mui/material';
import { useLogin } from 'store/auth';

export default function SignInWithGoogle({ children = 'Sign in with Google' }) {
  const login = useLogin();

  return (
    <Button variant="contained" onClick={login}>
      {children}
    </Button>
  );
}
