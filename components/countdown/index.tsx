"use client";

import React, { useState } from "react";
import { useInterval } from "react-use";

import { grueneType } from "@/app/page";

type Props = {
  targetDate: string;
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function DigitalCount({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xs md:text-base lg:text-2xl text-lime-500">
        {label}
      </div>
      <div
        className={`${grueneType.className} text-5xl md:text-7xl lg:text-9xl`}
      >
        {value}
      </div>
    </div>
  );
}

const Countdown = ({ targetDate }: Props) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  const addLeadingZeros = (value: number | string) => {
    return String(value).padStart(2, "0");
  };

  return (
    <div className="relative z-10">
      <div className="text-glow flex space-x-12 md:space-x-16 lg:space-x-24">
        <DigitalCount label="Tage" value={addLeadingZeros(timeLeft.days)} />
        <div className="flex">
          <DigitalCount
            label="Stunden"
            value={`${addLeadingZeros(timeLeft.hours)}:`}
          />
          <DigitalCount
            label="Minuten"
            value={`${addLeadingZeros(timeLeft.minutes)}:`}
          />
          <DigitalCount
            label="Sekunden"
            value={addLeadingZeros(timeLeft.seconds)}
          />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
