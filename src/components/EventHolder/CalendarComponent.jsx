import React from "react";
import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-glass.css";

class CalendarComponent extends React.Component {
  componentDidMount() {
    new Calendar({
      id: "#myCal",
      theme: "glass",
      weekdayType: "long-upper",
      monthDisplayType: "long",
      calendarSize: "small",
      layoutModifiers: ["month-left-align"],
      eventsData: [
        {
          id: 1,
          name: "French class",
          start: "2020-08-17T06:00:00",
          end: "2020-08-18T20:30:00"
        },
        {
          id: 2,
          name: "Blockchain 101",
          start: "2020-08-20T10:00:00",
          end: "2020-08-20T11:30:00"
        }
      ],
      dateChanged: (currentDate, events) => {
        console.log("date change", currentDate, events);
      },
      monthChanged: (currentDate, events) => {
        console.log("month change", currentDate, events);
      }
    });
  }

  render() {
    return <div id="myCal"></div>;
  }
}

export default CalendarComponent;
