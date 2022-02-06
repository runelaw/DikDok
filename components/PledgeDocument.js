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
import Image from 'next/image';
import orange from 'assets/orange.png';

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
      <Button variant="contained" size="large" onClick={onOpen}>
        Pledge for India&apos;s #100bhagya
      </Button>
      <Dialog open={isOpen} fullScreen>
        <DialogTitle>
          <Container maxWidth="sm">
            <Typography variant="h6" textAlign="center">
              Pledge for #India100
            </Typography>
          </Container>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              position: 'fixed',
              top: '0%',
              right: -150,
              transform: 'translate(0, 0)',
            }}
          >
            <Image
              src={orange}
              alt="Green"
              layout="fixed"
              width={orange.width / 1.5}
              height={orange.height / 1.5}
            />
          </Box>

          <Container sx={{ mt: 4, position: 'relative' }} maxWidth="sm">
            {!pledgedBy && (
              <>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>
                  I,{' '}
                  {pledgedBy ? (
                    <Box component="span" sx={{ fontWeight: 'medium' }}>
                      {pledgedBy}
                    </Box>
                  ) : (
                    <TextField
                      variant="standard"
                      size="small"
                      placeholder="Your name"
                      {...materialRegister(register, 'name')}
                      sx={{
                        border: '0',
                      }}
                    />
                  )}
                  , promise to contribute towards nation building in the next 25
                  years and create 100bhagya (saubhagya-fortune) at local, state
                  and nation level.
                </Typography>
                <Typography
                  sx={{ mt: 1, fontSize: { xs: '1rem', md: '1.3rem' } }}
                >
                  I will get involved in activities which will feed towards the
                  objective of transforming India in the next 25 years, and
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
                    fontSize: { xs: '1rem', md: '1.3rem' },
                    fontWeight: 'medium',
                  }}
                >
                  You just pledged for a Better India!
                </Typography>

                <Button
                  component="a"
                  href="https://tally.so/r/mDyQX3"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Subscribe for further updates
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
