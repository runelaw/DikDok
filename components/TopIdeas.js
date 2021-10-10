import { Grid, Typography } from '@mui/material';
import PostCard from 'components/PostCard';
import { useTopIdeas } from 'store/idea';

export default function TopIdeas() {
  const { data: ideas } = useTopIdeas();

  return (
    <>
      <Typography
        variant="h5"
        component="div"
        sx={{ mt: { xs: 8, md: 12 }, mb: 3 }}
      >
        Top Ideas
      </Typography>

      <Grid container spacing={2}>
        {(ideas ?? []).map((it) => (
          <Grid key={it.id} item xs={12} md={6}>
            <PostCard type="idea" post={it} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
