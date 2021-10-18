import { LoadingButton } from '@mui/lab';
import { Stack, TextField, Typography } from '@mui/material';
import { useAsyncFn } from 'react-use';
import materialRegister from 'utils/materialRegister';
import { useMakeAPledge } from 'store/pledge';
import { useSnackbar } from 'notistack';
import ShareCardPopover from 'components/ShareCardPopover';

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

      <Stack alignItems="center">
        <Typography textAlign="center" color="textSecondary" sx={{ mt: 3 }}>
          Share Now
        </Typography>
        <ShareCardPopover
          title="Make a Pledge for India100"
          link="https://www.100bhagya.com/make-a-pledge"
          size="normal"
        />
      </Stack>
    </Stack>
  );
}
