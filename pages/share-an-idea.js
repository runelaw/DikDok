import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Chip,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Navigation from 'components/Navigation';
import UserCard from 'components/UserCard';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { loggedIn, useAuth } from 'store/auth';
import { ideaTags, useCreateIdea, useMyIdeas } from 'store/idea';
import materialRegister from 'utils/materialRegister';
import { z } from 'zod';

const urlRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;

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
  tags: z
    .array(z.string().min(1, { message: 'Cannot be empty' }))
    .min(1, { message: 'Cannot be empty' }),
});

export default function ShareAnIdea() {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      link: '',
      description: '',
      tags: [],
    },
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const { data: ideas, refetch } = useMyIdeas();

  const createIdea = useCreateIdea();
  const onSubmit = useCallback(
    async (state) => {
      setLoading(true);
      try {
        await createIdea(state);
        reset();
      } finally {
        setLoading(false);
        refetch();
      }

      // TODO: Show that the idea has been created.
    },
    [createIdea, refetch, reset]
  );

  return (
    <>
      <Navigation />
      <Head>
        <title>100bhagya - Share an Idea for #India100</title>
      </Head>

      <Container sx={{ pt: 4, pb: 8 }}>
        <Stack alignItems="center">
          <Stack
            component="form"
            sx={{ maxWidth: 700, width: '100%' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography variant="h6" component="div" textAlign="center">
              Share an Idea for{' '}
              <Typography variant="h6" component="span" color="primary">
                #India100
              </Typography>
            </Typography>
            <Typography color="textSecondary" textAlign="center" sx={{ mb: 4 }}>
              “The future depends on what you do today.” - Gandhi
            </Typography>

            <UserCard>
              {ideas?.length > 0 && (
                <Link href="/my-ideas" passHref>
                  <Button variant="outlined" component="a">
                    My Ideas
                  </Button>
                </Link>
              )}
            </UserCard>

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
              minRows={2}
              size="small"
              sx={{ bgcolor: 'white', mt: 2 }}
              error={!!errors.description}
              helperText={errors.description?.message}
              required
            />
            <Controller
              name="tags"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Tags"
                  size="small"
                  sx={{ bgcolor: 'white', mt: 2 }}
                  select
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={ideaTags[value]}
                            size="small"
                          />
                        ))}
                      </Box>
                    ),
                  }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  required
                >
                  {Object.keys(ideaTags).map((key) => (
                    <MenuItem key={key} value={key}>
                      {ideaTags[key]}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mt: 2 }}
              loading={loading}
              disabled={isLoggedIn !== loggedIn.true}
            >
              Share an Idea
            </LoadingButton>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
