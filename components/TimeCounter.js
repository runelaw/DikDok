import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { DateTime } from 'luxon';
import React, { useEffect, useMemo, useState } from 'react';

export default function TimeCounter() {
  const [tick, setTick] = useState(false);

  // Generate a tick on every minute.
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((tick) => !tick);
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  const { years, months, days } = useMemo(() => {
    const sauSaal = DateTime.local(2046, 8, 15, 0, 0, 0, 0);
    return sauSaal.diffNow(['years', 'months', 'days', 'hours']);
    // On each tick calculate the time left.
    // eslint-disable-next-line
  }, [tick]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={2}
      sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
    >
      <Counter count={years} suffix="Y" />
      <Counter count={months} suffix="M" />
      <Counter count={days} suffix="D" />
    </Stack>
  );
}

function Counter({ count, suffix }) {
  return (
    <Box
      sx={{
        bgcolor: 'grey.200',
        px: 2,
        borderRadius: 2,
      }}
    >
      {count}
      {suffix}
    </Box>
  );
}
