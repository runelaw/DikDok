import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { useAsyncFn } from 'react-use';
import materialRegister from 'utils/materialRegister';

export default function PledgeForm({ form }) {
  const [{ loading }, onSubmit] = useAsyncFn(async (state) => {}, []);

  return (
    <Stack
      component="form"
      spacing={2}
      sx={{ mt: 4 }}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <TextField
        label="Name"
        size="small"
        {...materialRegister(form.register, 'name')}
      />
      <TextField
        label="Email"
        size="small"
        {...materialRegister(form.register, 'email')}
      />
      <LoadingButton type="submit" variant="contained" loading={loading}>
        Pledge Now
      </LoadingButton>
    </Stack>
  );
}
