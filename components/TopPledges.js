import { Stack, Typography, Grid } from '@mui/material';
import PostCard from 'components/PostCard';
import { useTopPledges } from 'store/pledge';

export default function TopPledges() {
  const { data: pledges } = useTopPledges();

  return (
    <>
      <Typography
        variant="h5"
        component="div"
        sx={{ mt: { xs: 8, md: 12 }, mb: 3 }}
      >
        Top Initiatives
      </Typography>

      <Grid container spacing={2}>
        {(pledges ?? []).map((it) => (
          <Grid key={it.id} item xs={12} md={6}>
            <PostCard type="initiative" post={it} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
