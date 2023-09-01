import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DateContainer = () => {
  const { days, months, years } = useSelector((state) => state.age.age);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the state updates
    setShouldAnimate(true);
    
    // After 1 second, reset the animation trigger
    const timeoutId = setTimeout(() => {
      setShouldAnimate(false);
    }, 1000);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [years, months, days]);

  // Define a class name based on the animation trigger
  const containerClassName = shouldAnimate ? "fadeIn" : "";

  return (
    <section className={`flex flex-col justify-start gap-y-5 pr-28 mobile:p-0 ${containerClassName}`}>
      <h2 className="text-7xl mobile:text-5xl font-bold italic">
        {years ? years : "--"} <span>years</span>
      </h2>
      <h2 className="text-7xl mobile:text-5xl font-bold italic">
        {months ? months : "--"} <span>months</span>
      </h2>
      <h2 className="text-7xl mobile:text-5xl font-bold italic">
        {days ? days : "--"} <span>days</span>
      </h2>
    </section>
  );
};

export default DateContainer;
