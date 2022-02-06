import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import { useBoolean } from 'react-use';
import { useCallback } from 'react';
import { usePledgesCount } from 'store/pledge';
import ShareButtons from 'components/ShareButtons';
import { useForm } from 'react-hook-form';
import materialRegister from 'utils/materialRegister';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Required'),
});

export default function PledgeDocument() {
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
    reset();
  }, [toggleOpen]);

  const { data: count } = usePledgesCount();

  const onSubmit = useCallback((state) => {
    console.log(state);
  }, []);

  return (
    <>
      <Button variant="contained" size="large" sx={{ mt: 2 }} onClick={onOpen}>
        Pledge to #India100
      </Button>
      <Dialog open={isOpen} fullScreen>
        <DialogTitle>
          <Container>
            <Typography variant="h4">Pledge for #India100</Typography>
          </Container>
        </DialogTitle>
        <DialogContent>
          <Container sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: '1.5rem' }}>
              I,{' '}
              <TextField
                size="small"
                placeholder="Your name"
                {...materialRegister(register, 'name')}
              />
              , hereby swear to work towards nation-building for the next 25
              years by committing myself to the cause of India100.
            </Typography>
            <Typography sx={{ mt: 1, fontSize: '1.5rem' }}>
              I swear to spread the message among my communities about what
              India100 stands for, and also endeavor involving my communities
              towards the vision of India100.
            </Typography>
            <Typography sx={{ mt: 1, fontSize: '1.5rem' }}>
              I swear to uphold this pledge and dedicate myself towards creatign
              Saubhagya (fortune) at a local, state and national level.
            </Typography>
            <Typography sx={{ mt: 1, fontSize: '1.5rem' }}>
              I swear to get involved in activies which will feed towards the
              objective of transforming India in the next 25 years, and creating
              a unified force which dedicatedly works towards a prosperous,
              sustainable, inclusive, just and progressive India by 2047, when
              we complete 100 years of a journey as an independent republic.
            </Typography>

            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 4 }}
              onClick={handleSubmit(onSubmit)}
            >
              Pledge for a Better India
            </Button>

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
            <ShareButtons />
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
