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

export default function ShareCardPopover({
  type,
  postId,
  title,
  size = 'small',
}) {
  const link = `https://www.100bhagya.com/${type}/${postId}`;

  return (
    <PopupState variant="popover" popupId="share-card-popover">
      {(popupState) => (
        <>
          <IconButton component="span" size={size} {...bindTrigger(popupState)}>
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
                  subject={title}
                  url={link}
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <FacebookShareButton
                  style={{ height: 32, width: 32 }}
                  quote={title}
                  url={link}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LinkedinShareButton
                  style={{ height: 32, width: 32 }}
                  title={title}
                  url={link}
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <PocketShareButton
                  style={{ height: 32, width: 32 }}
                  title={title}
                  url={link}
                >
                  <PocketIcon size={32} round />
                </PocketShareButton>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <RedditShareButton
                  style={{ height: 32, width: 32 }}
                  title={title}
                  url={link}
                >
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <TelegramShareButton
                  style={{ height: 32, width: 32 }}
                  title={title}
                  url={link}
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <TwitterShareButton
                  style={{ height: 32, width: 32 }}
                  title={title}
                  url={link}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton
                  style={{ height: 32, width: 32 }}
                  title={title}
                  url={link}
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
