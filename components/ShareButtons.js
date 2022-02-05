import { Box } from '@mui/system';
import { Stack, Typography } from '@mui/material';
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

export default function ShareButtons() {
  const title = 'Make a Pledge for #India100';
  const link = 'https://100bhagya.com/';

  return (
    <Box sx={{ mt: 2 }}>
      <Typography
        variant="body2"
        color="textSecondary"
        textAlign="center"
        sx={{ mb: 1 }}
      >
        Share
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={1}>
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
  );
}
