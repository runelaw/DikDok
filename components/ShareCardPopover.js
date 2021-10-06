import { IconButton, Popover, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import { MdShare } from 'react-icons/md';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

export default function ShareCardPopover() {
  return (
    <PopupState variant="popover" popupId="share-card-popover">
      {(popupState) => (
        <>
          <IconButton
            component="span"
            size="small"
            {...bindTrigger(popupState)}
          >
            <MdShare />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            elevation={1}
          >
            <Box sx={{ px: 2, pt: 1, pb: 2 }}>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                Share
              </Typography>

              <Stack direction="row" spacing={1}>
                <EmailShareButton
                  style={{ height: 32, width: 32 }}
                  url="https://google.com"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <FacebookShareButton
                  style={{ height: 32, width: 32 }}
                  url="https://google.com"
                  quote="Google"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LinkedinShareButton
                  style={{ height: 32, width: 32 }}
                  url="https://google.com"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <PinterestShareButton
                  style={{ height: 32, width: 32 }}
                  url="https://google.com"
                >
                  <PinterestIcon size={32} round />
                </PinterestShareButton>
                <PocketShareButton
                  style={{ height: 32, width: 32 }}
                  url="https://google.com"
                >
                  <PocketIcon size={32} round />
                </PocketShareButton>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <RedditShareButton
                  style={{ height: 32, width: 32 }}
                  url="https://google.com"
                >
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <TelegramShareButton
                  style={{ height: 32, width: 32 }}
                  url="https://google.com"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <TwitterShareButton
                  style={{ height: 32, width: 32 }}
                  url="https://google.com"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton
                  style={{ height: 32, width: 32 }}
                  url="https://google.com"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </Stack>
            </Box>
          </Popover>
        </>
      )}
    </PopupState>
  );
}
