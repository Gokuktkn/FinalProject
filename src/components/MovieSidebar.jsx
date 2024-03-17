import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Slider from "rc-slider";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

const step = 0.5; // Define the step value

// const generateMarks = (maxValue, stepValue) => {
//   const marks = {};
//   for (let i = 0; i <= maxValue; i += stepValue) {
//     marks[i] = {
//       style: { color: "blue", height: "10px" },
//       label: i.toString(),
//     };
//   }
//   return marks;
// };

const maxScore = 10; // Define the maximum score
// const marks = generateMarks(maxScore, step); // Generate marks

const MovieSidebar = ({
  onUserScoreChange,
  onUserVoteChange,
  onMovieLengthChange,
  onStartDateChange,
  onEndDateChange,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleStartDateChange = (date) => {
    setStartDate(date);
    onStartDateChange(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onEndDateChange(date);
  };

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filter</Accordion.Header>
        <Accordion.Body>
          <label className="form-label">User score</label>
          <Slider
            range
            onChange={onUserScoreChange}
            min={0}
            max={10}
            defaultValue={[0, 10]}
            step={step}
            // marks={marks}
            dotStyle={{ display: "none" }}
          />

          <label className="form-label">Minimum user vote</label>
          <Slider
            onChange={onUserVoteChange}
            min={0}
            max={500}
            defaultValue={0}
          />

          <label className="form-label">Movie length</label>
          <Slider
            range
            onChange={onMovieLengthChange}
            min={0}
            max={400}
            defaultValue={[0, 400]}
          />

          <p>Release date</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => handleStartDateChange(date)}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => handleEndDateChange(date)}
          />

          <p>Search keywords</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MovieSidebar;
