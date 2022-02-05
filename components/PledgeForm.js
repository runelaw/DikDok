import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import materialRegister from 'utils/materialRegister';
import { useCallback } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMakePledge } from 'store/pledge';
import { useSnackbar } from 'notistack';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email(),
});

export default function PledgeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const { enqueueSnackbar } = useSnackbar();

  const makePledge = useMakePledge();
  const onSubmit = useCallback(
    async (state) => {
      try {
        await makePledge(state);
        enqueueSnackbar('You just made a pledge for #India100.', {
          variant: 'success',
        });
        reset();
      } catch (err) {
        enqueueSnackbar('Failed to make a pledge.', {
          variant: 'error',
        });
      }
    },
    [enqueueSnackbar, makePledge]
  );

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
