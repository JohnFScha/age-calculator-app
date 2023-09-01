import React from "react";
import { useSelector } from "react-redux";

const DateContainer = () => {
  const { days, months, years } = useSelector((state) => state.age.age);
  
  return (
    <section className="flex flex-col justify-start gap-y-5 pr-28 mobile:p-0">
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
