import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import '@pqina/flip/dist/flip.min.css';
import { DateTime } from 'luxon';
import React, { forwardRef, useEffect, useRef } from 'react';

export default function FlipCounter() {
  const yearRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();

  useEffect(() => {
    const sauSaal = DateTime.local(2046, 8, 15, 0, 0, 0, 0);
    let interval;

    import('@pqina/flip').then(({ default: Tick }) => {
      const { years, months, days } = sauSaal.diffNow([
        'years',
        'months',
        'days',
        'hours',
      ]);
      const yearTicker = Tick.DOM.create(yearRef.current, {
        value: `${years}Y `,
      });
      const monthTicker = Tick.DOM.create(monthRef.current, {
        value: `${months}M `,
      });
      const dayTicker = Tick.DOM.create(dayRef.current, {
        value: `${days}D`,
      });

      interval = setInterval(() => {
        const { years, months, days } = sauSaal.diffNow([
          'years',
          'months',
          'days',
          'hours',
        ]);

        yearTicker.value = `${years}Y `;
        monthTicker.value = `${months}M `;
        dayTicker.value = `${days}D`;
      }, 1000);
    });

    const year = yearRef.current;
    const month = monthRef.current;
    const day = dayRef.current;
    return () => {
      import('@pqina/flip').then(({ default: Tick }) => {
        Tick.DOM.destroy(year);
        Tick.DOM.destroy(month);
        Tick.DOM.destroy(day);
      });
      clearInterval(interval);
    };
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
    >
      <Counter ref={yearRef} name="Year" />
      <Counter ref={monthRef} name="Month" />
      <Counter ref={dayRef} name="Day" />
    </Stack>
  );
}

const Counter = forwardRef(function Counter({ name }, ref) {
  return (
    <Box
      ref={ref}
      className="tick"
      sx={{
        '& .tick-flip-panel': {
          bgcolor: 'grey.100',
          color: 'grey.900',
        },

        '& .tick-flip-panel-back:after': {
          backgroundImage:
            '-webkit-linear-gradient(top, rgba(0,0,0,.2) 1px, rgba(0,0,0,.1) 0,transparent 30%)',
        },
      }}
    >
      <div data-repeat="true" aria-hidden="true">
        <span data-view="flip">{name}</span>
      </div>
    </Box>
  );
});
