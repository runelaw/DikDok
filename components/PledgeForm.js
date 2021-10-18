import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { useAsyncFn } from 'react-use';
import materialRegister from 'utils/materialRegister';
import { useMakeAPledge } from 'store/pledge';
import { useSnackbar } from 'notistack';

export default function PledgeForm({ form }) {
  const { enqueueSnackbar } = useSnackbar();
  const makePledge = useMakeAPledge();
  const [{ loading }, onSubmit] = useAsyncFn(async (state) => {
    await makePledge({ name: state.name, email: state.email });
    form.reset();
    enqueueSnackbar('You have pledged to commit to India100.', {
      variant: 'success',
    });
  }, []);

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
