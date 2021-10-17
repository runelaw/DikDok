import { Grid, Typography } from '@mui/material';
import PostCard from 'components/PostCard';
import { useTopIdeas } from 'store/idea';
import EmptyIdeas from 'components/EmptyIdeas';

export default function TopIdeas() {
  const { data: ideas, isLoading } = useTopIdeas();

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
            <PostCard post={it} />
          </Grid>
        ))}

        {!isLoading && (ideas ?? []).length === 0 && <EmptyIdeas />}
      </Grid>
    </>
  );
}
