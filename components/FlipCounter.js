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
      const yearTicker = Tick.DOM.create(yearRef.current, { value: years });
      const monthTicker = Tick.DOM.create(monthRef.current, { value: months });
      const dayTicker = Tick.DOM.create(dayRef.current, { value: days });
      const hourTicker = Tick.DOM.create(hourRef.current, { value: hours });
      const minuteTicker = Tick.DOM.create(minuteRef.current, {
        value: minutes,
      });
      const secondTicker = Tick.DOM.create(secondRef.current, {
        value: Math.floor(seconds),
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

        yearTicker.value = years;
        monthTicker.value = months;
        dayTicker.value = days;
        hourTicker.value = hours;
        minuteTicker.value = minutes;
        secondTicker.value = Math.floor(seconds);
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
    <Stack direction="row" justifyContent="center" sx={{ fontSize: '3rem' }}>
      <Counter ref={yearRef} name="Year" />
      <Typography>Y</Typography>
      <Counter ref={monthRef} name="Month" />
      <Typography>M</Typography>
      <Counter ref={dayRef} name="Day" />
      <Typography>D</Typography>
      <Counter ref={hourRef} name="Hour" />
      <Typography>H</Typography>
      <Counter ref={minuteRef} name="Minute" />
      <Typography>M</Typography>
      <Counter ref={secondRef} name="Second" />
      <Typography>S</Typography>
    </Stack>
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
