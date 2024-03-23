import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

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

  const userScoreMarks = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
  };

  const minUserScoreMarks = {
    0: "0",
    100: "100",
    200: "200",
    300: "300",
    400: "400",
    500: "500",
  };

  const movieLengthMarks = {
    0: "0",
    60: "60",
    120: "120",
    180: "180",
    240: "240",
    300: "300",
    360: "360",
  };

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>Filter</strong>
        </Accordion.Header>
        <Accordion.Body>
          <label className="form-label">User score</label>
          <Slider
            className="filter-slider"
            range
            onChange={onUserScoreChange}
            min={0}
            max={10}
            defaultValue={[0, 10]}
            step={0.5}
            marks={userScoreMarks}
          />
          <label className="form-label">Minimum user vote</label>
          <Slider
            className="filter-slider"
            onChange={onUserVoteChange}
            min={0}
            max={500}
            step={50}
            defaultValue={0}
            marks={minUserScoreMarks}
          />

          <label className="form-label">Movie length</label>
          <Slider
            className="filter-slider"
            range
            onChange={onMovieLengthChange}
            step={30}
            min={0}
            max={400}
            defaultValue={[0, 400]}
            marks={movieLengthMarks}
          />

          <label className="form-label">Release Date</label>
          <div className="filter-date-picker-div">
            <DatePicker
              className="filter-date-picker"
              selected={startDate}
              onChange={(date) => handleStartDateChange(date)}
              slotProps={{
                textField: {
                  variant: "outlined",
                  placeholder: "Start Date",
                },
              }}
              sx={{ borderRadius: "50px", marginBottom: "10px" }}
            />
            <DatePicker
              className="filter-date-picker"
              selected={endDate}
              onChange={(date) => handleEndDateChange(date)}
              slotProps={{
                textField: { variant: "outlined", placeholder: "End Date" },
                box: { borderRadius: "15px" },
              }}
            />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MovieSidebar;
