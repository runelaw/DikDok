import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '@pqina/flip/dist/flip.min.css';
import { DateTime } from 'luxon';
import React, { forwardRef, useEffect, useRef } from 'react';

export default function FlipCounter() {
  const yearRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();
  const hourRef = useRef();
  const minuteRef = useRef();
  const secondRef = useRef();

  useEffect(() => {
    const sauSaal = DateTime.local(2046, 8, 15, 0, 0, 0, 0);
    let interval;

    import('@pqina/flip').then(({ default: Tick }) => {
      const { years, months, days, hours, minutes, seconds } = sauSaal.diffNow([
        'years',
        'months',
        'days',
        'hours',
        'minutes',
        'seconds',
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
      const hourTicker = Tick.DOM.create(hourRef.current, {
        value: doubleDigit(hours) + ':',
      });
      const minuteTicker = Tick.DOM.create(minuteRef.current, {
        value: doubleDigit(minutes),
      });

      interval = setInterval(() => {
        const { years, months, days, hours, minutes } = sauSaal.diffNow([
          'years',
          'months',
          'days',
          'hours',
          'minutes',
          'seconds',
        ]);

        yearTicker.value = `${years}Y `;
        monthTicker.value = `${months}M `;
        dayTicker.value = `${days}D`;
        hourTicker.value = doubleDigit(hours) + ':';
        minuteTicker.value = doubleDigit(minutes);
      }, 1000);
    });

    const year = yearRef.current;
    const month = monthRef.current;
    const day = dayRef.current;
    const hour = hourRef.current;
    const minute = minuteRef.current;
    return () => {
      import('@pqina/flip').then(({ default: Tick }) => {
        Tick.DOM.destroy(year);
        Tick.DOM.destroy(month);
        Tick.DOM.destroy(day);
        Tick.DOM.destroy(hour);
        Tick.DOM.destroy(minute);
      });
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
      >
        <Counter ref={yearRef} name="Year" />
        <Counter ref={monthRef} name="Month" />
        <Counter ref={dayRef} name="Day" />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ fontSize: { xs: '2rem', sm: '2rem' }, mt: 2 }}
      >
        <Counter ref={hourRef} name="Hour" />
        <Counter ref={minuteRef} name="Minute" />
      </Stack>
    </>
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

function doubleDigit(num) {
  const text = `0${num}`;
  if (text.length === 2) {
    return text;
  }
  return text.substring(1);
}
