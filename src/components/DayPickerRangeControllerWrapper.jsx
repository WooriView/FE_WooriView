/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unused-prop-types */
import { useState, useEffect } from "react";

import omit from "lodash/omit";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "./datepicker_override.css";
import moment from "moment/moment";
import classNames from "classnames";
import styled from "styled-components";

const START_DATE = "startDate";
const END_DATE = "endDate";

function DayPickerRangeControllerWrapper(props) {
  const currentMoment = moment();
  const calculateActiveWeek = day => {
    const mon = day.clone().startOf("week");
    const tue = mon.clone().add(1, "d");
    const wed = mon.clone().add(2, "d");
    const thu = mon.clone().add(3, "d");
    const fri = mon.clone().add(4, "d");
    const sat = mon.clone().add(5, "d");
    const sun = mon.clone().add(6, "d");
    return [sun, mon, tue, wed, thu, fri, sat];
  };

  const [date, setDate] = useState({
    clickedDays: calculateActiveWeek(currentMoment),
    startDate: moment(new Date()).startOf("week"),
    endDate: moment(new Date()).endOf("week"),
    errorMessage: "null",
  });
  const [focus, setFocus] = useState({
    focusedInput: START_DATE,
  });

  const [hoveredDays, setHoveredDays] = useState({
    hoveredDays: calculateActiveWeek(currentMoment),
  });
  const isDayHighlighted = day => {
    let isHighlighted = false;
    hoveredDays.hoveredDays.forEach(hoveredDay => {
      const isDayOfMonthMatch = hoveredDay.date() === day.date();
      const isMonthMatch = hoveredDay.month() === day.month();
      const isYearMatch = hoveredDay.year() === day.year();
      if (isDayOfMonthMatch && isMonthMatch && isYearMatch) {
        isHighlighted = true;
      }
    });
    return isHighlighted;
  };
  const isDayClicked = day => {
    let isHighlighted = false;
    date.clickedDays.forEach(dates => {
      const isDayOfMonthMatch = dates.date() === day.date();
      const isMonthMatch = dates.month() === day.month();
      const isYearMatch = dates.year() === day.year();
      if (isDayOfMonthMatch && isMonthMatch && isYearMatch) {
        isHighlighted = true;
      }
    });
    return isHighlighted;
  };

  const onDateHovered = day => {
    setHoveredDays({
      ...hoveredDays,
      hoveredDays: calculateActiveWeek(day),
    });
  };
  const onDateSelected = day => {
    setDate({
      ...date,
      clickedDays: calculateActiveWeek(day),
    });
  };
  const renderCalendarDay = day => {
    const dayClasses = classNames("CalendarDay", "CalendarDay__default");
    const style = {
      width: "80px",
      height: "80px",
    };
    if (day.day) {
      const dayOfMonth = day.day.date();
      const isHighlighted = isDayHighlighted(day.day);
      const isClicked = isDayClicked(day.day);
      return (
        <CalendarDayBox
          isHighlighted={isHighlighted}
          isClicked={isClicked}
          className={dayClasses}
          onMouseEnter={() => onDateHovered(day.day)}
          onClick={() => onDateSelected(day.day)}
        >
          <CalendarDayText>{dayOfMonth}</CalendarDayText>
        </CalendarDayBox>
      );
    }
    return <td style={style} className={dayClasses} />;
  };
  const onDatesChange = ({ startDate, endDate }) => {
    const { daysViolatingMinNightsCanBeClicked, minimumNights } = props;
    const doesNotMeetMinNights = false;
    // if (daysViolatingMinNightsCanBeClicked && startDate && endDate) {
    //   const dayDiff = endDate.diff(
    //     startDate.clone().startOf("day").hour(12),
    //     "days",
    //   );
    //   doesNotMeetMinNights = dayDiff < minimumNights && dayDiff >= 0;
    // }
    console.log(date);
    setDate({
      clickedDays: calculateActiveWeek(moment(startDate)),
      startDate: moment(startDate).startOf("week"),
      endDate: moment(startDate).endOf("week"),
      errorMessage: doesNotMeetMinNights
        ? "That day does not meet the minimum nights requirement"
        : null,
    });
  };

  const onFocusChange = focusedInput => {
    console.log(focusedInput);
    setFocus({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: START_DATE,
    });
  };

  const { renderCalendarInfo: renderCalendarInfoProp, showInputs } = props;

  const prop = omit(props, [
    "autoFocus",
    "autoFocusEndDate",
    "initialStartDate",
    "initialEndDate",
    "showInputs",
  ]);

  return (
    <div style={{ height: 700 }}>
      <DayPickerRangeController
        {...prop}
        onDatesChange={onDatesChange}
        onFocusChange={onFocusChange}
        numberOfMonths={2}
        focusedInput={focus.focusedInput}
        startDate={date.startDate}
        endDate={date.endDate}
        daySize={80}
        renderCalendarDay={renderCalendarDay}
      />
    </div>
  );
}

const CalendarDayBox = styled.td`
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  border: solid 2px #c6e2f2;
  border-style: ${props => (props.isHighlighted ? "solid none" : "none")};
  background-color: ${props =>
    props.isHighlighted
      ? props.isClicked
        ? "#C6E2F2"
        : "white"
      : props.isClicked && "#C6E2F2"};
  &:last-child {
    border-right-style: ${props => (props.isHighlighted ? "solid" : "none")};
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
  }
  &:first-child {
    border-left-style: ${props => (props.isHighlighted ? "solid" : "none")};
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  &:hover {
    box-sizing: border-box;
    border: solid 2px #c6e2f2;
    border-style: ${props => (props.isHighlighted ? "solid none" : "none")};
    background-color: ${props =>
      props.isHighlighted && props.isClicked ? "#C6E2F2" : "white"};
    &:last-child {
      border-right-style: ${props => (props.isHighlighted ? "solid" : "none")};
      border-bottom-right-radius: 50%;
      border-top-right-radius: 50%;
    }
    &:first-child {
      border-left-style: ${props => (props.isHighlighted ? "solid" : "none")};
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    }
  }
`;
const CalendarDayText = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  font-size: 25px;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default DayPickerRangeControllerWrapper;
