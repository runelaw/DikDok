import {
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { MdArrowUpward, MdOpenInNew } from 'react-icons/md';
import { pledgeTags } from 'store/pledge';
import ShareCardPopover from './ShareCardPopover';

export default function PledgeCard({
  pledgeId,
  title,
  description,
  link,
  tags,
}) {
  const { push } = useRouter();
  const onClick = useCallback(
    () => push(`/initiative/${pledgeId}`),
    [pledgeId, push]
  );

  return (
    <Card sx={{ display: 'flex', flex: 1, flexShrink: 0 }}>
      <Button
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 150,
          borderRadius: 0,
          borderRight: '1px solid',
          borderColor: 'grey.300',
          flexShrink: 0,
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <Stack sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MdArrowUpward size={20} />
          <Box component="span" sx={{ mt: 0.5 }}>
            40 Votes
          </Box>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: 'flex-start', px: 2, py: 0 }}
        >
          <ShareCardPopover pledgeId={pledgeId} title={title} />
          {link && (
            <IconButton
              component="a"
              size="small"
              href={link}
              target="_blank"
              rel="noreferrer nofollow"
            >
              <MdOpenInNew />
            </IconButton>
          )}
        </Stack>
      </Button>

      <CardContent
        sx={{ pt: 1, pb: 1.5, cursor: 'pointer', flex: 1 }}
        onClick={onClick}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
        >
          {title}
        </Typography>

        <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
          {description}
        </Typography>

        <Stack direction="row" sx={{ mt: 1 }}>
          {tags.map((it, index) => (
            <Chip
              key={it}
              label={pledgeTags[it]}
              size="small"
              sx={{ mr: index !== tags.length - 1 ? 1 : 0 }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
