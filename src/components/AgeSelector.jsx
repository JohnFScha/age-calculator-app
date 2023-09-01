import React, { useRef } from "react";
import { connect } from "react-redux";
import { setAge } from "../store";
import { BsFillArrowDownCircleFill as Arrow } from "react-icons/bs";
import calculateAge from "../utils/calculateAge";
import Input from "./Input";

function AgeSelector({ age, setAge }) {
  const dayRef = useRef("");
  const monthRef = useRef("");
  const yearRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const date = {
      day: parseInt(dayRef.current.value),
      month: parseInt(monthRef.current.value),
      year: parseInt(yearRef.current.value),
    };

    const selectedDate = new Date(date.year, date.month - 1, date.day);
    const isFutureDate = selectedDate > new Date();

    if (isFutureDate) {
      return (
        (dayRef.current.nextSibling.className = "italic text-xs"),
        (monthRef.current.nextSibling.className = "italic text-xs"),
        (dayRef.current.className += " border-red-600"),
        (monthRef.current.className += " border-red-600")
      );
    }

    const years = calculateAge(selectedDate);
    setAge(years);
    console.log(age);

    dayRef.current.nextSibling.className = "hidden";
    monthRef.current.nextSibling.className = "hidden";
    dayRef.current.className =
      "rounded-lg border-2 px-2 py-1 placeholder:font-bold";
    monthRef.current.className =
      "rounded-lg border-2 px-2 py-1 placeholder:font-bold";
    event.target.reset();
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-10 mobile:gap-14">
      <fieldset className="flex gap-1 mobile:w-8/12 mobile:p-0 pt-2 pr-28">
        <Input
          reference={dayRef}
          min={1}
          max={31}
          placeholder={"DD"}
          name={"day"}
        />
        <Input
          reference={monthRef}
          min={1}
          max={12}
          placeholder={"MM"}
          name={"month"}
        />
        <Input
          reference={yearRef}
          min={1930}
          max={2023}
          placeholder={"YYYY"}
          name={"year"}
        />
      </fieldset>
      <div className="flex items-center relative mobile:mb-10">
        <hr className="w-full" />
        <button
          type="submit"
          className="z-10 mobile:absolute mobile:transform mobile:-translate-x-1/2 mobile:-translate-y-1/2 mobile:left-1/2 mobile:top-1/2"
        >
          <Arrow />
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAge: (age) => dispatch(setAge(age)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgeSelector);
