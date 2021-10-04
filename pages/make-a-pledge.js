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

export default function Home() {
  return (
    <>
      <Navigation />
      <Head>
        <title>100bhagya - Make a Pledge for #India100</title>
      </Head>

      <Container sx={{ pt: 4, pb: 8 }}>
        <Stack alignItems="center">
          <Stack sx={{ maxWidth: 700, width: '100%' }}>
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
              label="Title"
              size="small"
              sx={{ bgcolor: 'white', mt: 4 }}
            />
            <TextField
              label="Link"
              size="small"
              sx={{ bgcolor: 'white', mt: 2 }}
            />
            <TextField
              label="Description"
              multiline
              minRows={8}
              size="small"
              sx={{ bgcolor: 'white', mt: 2 }}
            />
            <TextField
              label="Tags"
              size="small"
              sx={{ bgcolor: 'white', mt: 2 }}
              select
            >
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="agriculture">Agriculture</MenuItem>
              <MenuItem value="finance">Finance</MenuItem>
              <MenuItem value="manufacturing">Manufacturing</MenuItem>
            </TextField>

            <Button variant="contained" sx={{ mt: 2 }}>
              Make a Pledge
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
