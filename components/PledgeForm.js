import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import materialRegister from 'utils/materialRegister';
import { useCallback } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email(),
});

export default function PledgeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback((state) => {
    console.log(state);
  }, []);

  return (
    <Stack
      component="form"
      alignItems="center"
      sx={{ mt: 4 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={2} maxWidth={400} width="100%">
        <TextField
          placeholder="Your Name"
          size="small"
          {...materialRegister(register, 'name')}
          helperText={errors.name?.message}
          error={Boolean(errors.name)}
        />
        <TextField
          placeholder="Email"
          size="small"
          {...materialRegister(register, 'email')}
          helperText={errors.email?.message}
          error={Boolean(errors.email)}
        />
        <Button variant="contained" type="submit">
          Pledge to #India100
        </Button>
      </Stack>
    </Stack>
  );
}
