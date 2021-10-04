import { zodResolver } from '@hookform/resolvers/zod';
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
import { Controller, useForm } from 'react-hook-form';
import { loggedIn, useAuth } from 'store/auth';
import materialRegister from 'utils/materialRegister';
import { z } from 'zod';

const urlRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const schema = z.object({
  title: z
    .string()
    .min(1, { message: 'Cannot be empty' })
    .max(80, { message: 'Cannot be more than 80 characters' }),
  link: z
    .string()
    .optional()
    .refine((val) => val === '' || urlRegex.test(val), {
      message: 'Not a valid link',
    }),
  description: z
    .string()
    .min(1, { message: 'Cannot be empty' })
    .max(140, { message: 'Cannot be more than 140 characters' }),
  tag: z.string().min(1, { message: 'Cannot be empty' }),
});

export default function MakeAPledge() {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      link: '',
      description: '',
      tag: '',
    },
    resolver: zodResolver(schema),
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
              error={!!errors.title}
              helperText={errors.title?.message}
              required
            />
            <TextField
              {...materialRegister(register, 'link')}
              label="Link"
              size="small"
              sx={{ bgcolor: 'white', mt: 2 }}
              error={!!errors.link}
              helperText={errors.link?.message}
            />
            <TextField
              {...materialRegister(register, 'description')}
              label="Description"
              multiline
              minRows={8}
              size="small"
              sx={{ bgcolor: 'white', mt: 2 }}
              error={!!errors.description}
              helperText={errors.description?.message}
              required
            />
            <Controller
              name="tag"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Tag"
                  size="small"
                  sx={{ bgcolor: 'white', mt: 2 }}
                  select
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  required
                >
                  <MenuItem value="education">Education</MenuItem>
                  <MenuItem value="agriculture">Agriculture</MenuItem>
                  <MenuItem value="finance">Finance</MenuItem>
                  <MenuItem value="manufacturing">Manufacturing</MenuItem>
                </TextField>
              )}
            />

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
