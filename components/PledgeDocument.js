import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useAsyncFn, useBoolean } from 'react-use';
import { useCallback, useState } from 'react';
import { useMakePledge, usePledgesCount } from 'store/pledge';
import ShareButtons from 'components/ShareButtons';
import { useForm } from 'react-hook-form';
import materialRegister from 'utils/materialRegister';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

const schema = z.object({
  name: z.string().min(1, 'Required'),
});

export default function PledgeDocument() {
  const [pledgedBy, setPledgedBy] = useState('');
  const [isOpen, toggleOpen] = useBoolean(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(schema),
  });

  const onOpen = useCallback(() => toggleOpen(true), [toggleOpen]);
  const onClose = useCallback(() => {
    toggleOpen(false);
    setPledgedBy('');
    reset();
  }, [reset, toggleOpen]);

  const { data: count } = usePledgesCount();
  const makePledge = useMakePledge();

  const { enqueueSnackbar } = useSnackbar();
  const [{ loading }, onSubmit] = useAsyncFn(
    async (state) => {
      try {
        await makePledge({ name: state.name });
        setPledgedBy(state.name);
        reset();
      } catch (err) {
        enqueueSnackbar('Failed to make a pledge. Try again.', {
          variant: 'error',
        });
      }
    },
    [enqueueSnackbar, makePledge, reset]
  );

  return (
    <>
      <Button variant="contained" size="large" sx={{ mt: 2 }} onClick={onOpen}>
        Pledge for India's #100bhagya
      </Button>
      <Dialog open={isOpen} fullScreen>
        <DialogTitle>
          <Container>
            <Typography variant="h4">Pledge for #India100</Typography>
          </Container>
        </DialogTitle>
        <DialogContent>
          <Container sx={{ mt: 4 }}>
            {!pledgedBy && (
              <>
                <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  I,{' '}
                  {pledgedBy ? (
                    <Box component="span" sx={{ fontWeight: 'medium' }}>
                      {pledgedBy}
                    </Box>
                  ) : (
                    <TextField
                      size="small"
                      placeholder="Your name"
                      {...materialRegister(register, 'name')}
                    />
                  )}
                  , hereby swear to work towards nation-building for the next 25
                  years by committing myself to the cause of India100.
                </Typography>
                <Typography
                  sx={{ mt: 1, fontSize: { xs: '1.1rem', md: '1.5rem' } }}
                >
                  I swear to spread the message among my communities about what
                  India100 stands for, and also endeavor involving my
                  communities towards the vision of India100.
                </Typography>
                <Typography
                  sx={{ mt: 1, fontSize: { xs: '1.1rem', md: '1.5rem' } }}
                >
                  I swear to uphold this pledge and dedicate myself towards
                  creatign Saubhagya (fortune) at a local, state and national
                  level.
                </Typography>
                <Typography
                  sx={{ mt: 1, fontSize: { xs: '1.1rem', md: '1.5rem' } }}
                >
                  I swear to get involved in activies which will feed towards
                  the objective of transforming India in the next 25 years, and
                  creating a unified force which dedicatedly works towards a
                  prosperous, sustainable, inclusive, just and progressive India
                  by 2047, when we complete 100 years of a journey as an
                  independent republic.
                </Typography>
              </>
            )}

            {!pledgedBy && (
              <LoadingButton
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 4 }}
                onClick={handleSubmit(onSubmit)}
                loading={loading}
              >
                Pledge for a Better India
              </LoadingButton>
            )}

            {pledgedBy && (
              <Stack alignItems="center">
                <Typography
                  textAlign="center"
                  sx={{
                    mt: 4,
                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                    fontWeight: 'medium',
                  }}
                >
                  You just pledged for a Better India!
                </Typography>

                <Button
                  component="a"
                  href="https://typeform.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Want to know more?
                </Button>
              </Stack>
            )}

            <Typography
              color="primary"
              textAlign="center"
              sx={{
                mt: 2,
                fontWeight: 'normal',
                py: 1,
                px: 4,
                borderRadius: 2,
              }}
            >
              {count ?? 0} pledges and counting...
            </Typography>
            {pledgedBy && <ShareButtons />}
          </Container>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
