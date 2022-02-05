import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useBoolean } from 'react-use';
import { useCallback } from 'react';
import { usePledgesCount } from 'store/pledge';
import ShareButtons from 'components/ShareButtons';

export default function PledgeDocument() {
  const [isOpen, toggleOpen] = useBoolean(false);
  const onOpen = useCallback(() => toggleOpen(true), [toggleOpen]);
  const onClose = useCallback(() => toggleOpen(false), [toggleOpen]);

  const { data: count } = usePledgesCount();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Button sx={{ p: 0, mt: 1 }} onClick={onOpen}>
        Read the Pledge Document
      </Button>
      <Dialog open={isOpen} fullWidth fullScreen={isSmallScreen}>
        <DialogTitle>Pledge for #India100</DialogTitle>
        <DialogContent>
          <Typography>
            I, [YOUR NAME], hereby swear to work towards nation-building for the
            next 25 years by committing myself to the cause of India100.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            I swear to spread the message among my communities about what
            India100 stands for, and also endeavor involving my communities
            towards the vision of India100.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            I swear to uphold this pledge and dedicate myself towards creatign
            Saubhagya (fortune) at a local, state and national level.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            I swear to get involved in activies which will feed towards the
            objective of transforming India in the next 25 years, and creating a
            unified force which dedicatedly works towards a prosperous,
            sustainable, inclusive, just and progressive India by 2047, when we
            complete 100 years of a journey as an independent republic.
          </Typography>

          <Typography
            color="primary"
            textAlign="center"
            sx={{
              mt: 2,
              fontWeight: 'normal',
              bgcolor: 'primary.50',
              py: 1,
              px: 4,
              borderRadius: 2,
            }}
          >
            {count ?? 0} pledges made till now
          </Typography>
          <ShareButtons />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
