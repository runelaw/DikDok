import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useAsyncFn } from 'react-use';
import { useAuth } from 'store/auth';
import materialRegister from 'utils/materialRegister';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Cannot be empty' }),
  email: z.string().email(),
});

export default function PledgeForm() {
  const user = useAuth(useCallback((state) => state.user, []));
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name ?? '',
      email: user?.email ?? '',
    },
    resolver: zodResolver(schema),
  });

  const [{ loading }, onSubmit] = useAsyncFn(async (state) => {}, []);

  return (
    <Stack
      component="form"
      spacing={2}
      sx={{ mt: 4 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="Name"
        size="small"
        {...materialRegister(register, 'name')}
      />
      <TextField
        label="Email"
        size="small"
        {...materialRegister(register, 'email')}
      />
      <LoadingButton type="submit" variant="contained" loading={loading}>
        Pledge Now
      </LoadingButton>
    </Stack>
  );
}
