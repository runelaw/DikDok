import {
  Button,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Navigation from 'components/Navigation';
import UserCard from 'components/UserCard';
import Head from 'next/head';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { loggedIn, useAuth } from 'store/auth';
import materialRegister from 'utils/materialRegister';

export default function MakeAPledge() {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      link: '',
      description: '',
      tag: '',
    },
  });

  const onSubmit = useCallback((state) => {
    console.log(state);
  }, []);

  return (
    <>
      <Navigation />
      <Head>
        <title>100bhagya - Make a Pledge for #India100</title>
      </Head>

      <Container sx={{ pt: 4, pb: 8 }}>
        <Stack alignItems="center">
          <Stack
            component="form"
            sx={{ maxWidth: 700, width: '100%' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography variant="h6" component="div" textAlign="center">
              Make a Pledge for{' '}
              <Typography variant="h6" component="span" color="primary">
                #India100
              </Typography>
            </Typography>
            <Typography color="textSecondary" textAlign="center" sx={{ mb: 4 }}>
              “The future depends on what you do today.” - Gandhi
            </Typography>

            <UserCard />

            <TextField
              {...materialRegister(register, 'title')}
              label="Title"
              size="small"
              sx={{ bgcolor: 'white', mt: 4 }}
            />
            <TextField
              {...materialRegister(register, 'link')}
              label="Link"
              size="small"
              sx={{ bgcolor: 'white', mt: 2 }}
            />
            <TextField
              {...materialRegister(register, 'description')}
              label="Description"
              multiline
              minRows={8}
              size="small"
              sx={{ bgcolor: 'white', mt: 2 }}
            />
            <TextField
              {...materialRegister(register, 'tag')}
              label="Tag"
              size="small"
              sx={{ bgcolor: 'white', mt: 2 }}
              select
            >
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="agriculture">Agriculture</MenuItem>
              <MenuItem value="finance">Finance</MenuItem>
              <MenuItem value="manufacturing">Manufacturing</MenuItem>
            </TextField>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2 }}
              disabled={isLoggedIn !== loggedIn.true}
            >
              Make a Pledge
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
