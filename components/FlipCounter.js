import { Stack, Typography } from '@mui/material';
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
        value: doubleDigit(minutes) + ':',
      });
      const secondTicker = Tick.DOM.create(secondRef.current, {
        value: doubleDigit(Math.floor(seconds)),
      });

      interval = setInterval(() => {
        const { years, months, days, hours, minutes, seconds } =
          sauSaal.diffNow([
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
        minuteTicker.value = doubleDigit(minutes) + ':';
        secondTicker.value = doubleDigit(Math.floor(seconds));
      }, 1000);
    });

    const year = yearRef.current;
    const month = monthRef.current;
    const day = dayRef.current;
    const hour = hourRef.current;
    const minute = minuteRef.current;
    const second = secondRef.current;
    return () => {
      import('@pqina/flip').then(({ default: Tick }) => {
        Tick.DOM.destroy(year);
        Tick.DOM.destroy(month);
        Tick.DOM.destroy(day);
        Tick.DOM.destroy(hour);
        Tick.DOM.destroy(minute);
        Tick.DOM.destroy(second);
      });
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }}
      >
        <Counter ref={yearRef} name="Year" />
        <Counter ref={monthRef} name="Month" />
        <Counter ref={dayRef} name="Day" />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' }, mt: 2 }}
      >
        <Counter ref={hourRef} name="Hour" />
        <Counter ref={minuteRef} name="Minute" />
        <Counter ref={secondRef} name="Second" />
      </Stack>
    </>
  );
}

const Counter = forwardRef(function Counter({ name }, ref) {
  return (
    <div ref={ref} className="tick">
      <div data-repeat="true" aria-hidden="true">
        <span data-view="flip">{name}</span>
      </div>
    </div>
  );
});

function doubleDigit(num) {
  const text = `0${num}`;
  if (text.length === 2) {
    return text;
  }
  return text.substring(1);
}
