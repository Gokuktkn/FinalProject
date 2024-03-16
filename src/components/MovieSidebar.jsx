import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Slider from "rc-slider";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const step = 0.5; // Define the step value

const generateMarks = (maxValue, stepValue) => {
  const marks = {};
  for (let i = 0; i <= maxValue; i += stepValue) {
    marks[i] = {
      style: { color: "blue", height: "10px" },
      label: i.toString(),
    };
  }
  return marks;
};

const maxScore = 10; // Define the maximum score
const marks = generateMarks(maxScore, step); // Generate marks


const MovieSidebar = ({
  onUserScoreChange,
  onUserVoteChange,
  onMovieLengthChange,
}) => {
 

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filter</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <ListGroup.Item>
              <label className="form-label">User score</label>
              <Slider
                range
                onChange={onUserScoreChange}
                min={0}
                max={10}
                defaultValue={[0, 10]}
                step={step}
                marks={marks} 
                dotStyle={{display: "none"}}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <label className="form-label">Minimum user vote</label>
              <Slider
                onChange={onUserVoteChange}
                min={0}
                max={500}
                defaultValue={0}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <label className="form-label">Movie length</label>
              <Slider
                range
                onChange={onMovieLengthChange}
                min={0}
                max={400}
                defaultValue={[0, 400]}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Release date</p>
              <input
                type="text"
                className="form-control"
                id="datepicker"
                data-provide="datepicker"
                data-date-format="yyyy-mm-dd"
                data-date-autoclose="true"
              />
              <input
                type="text"
                className="form-control"
                id="datepicker"
                data-provide="datepicker"
                data-date-format="yyyy-mm-dd"
                data-date-autoclose="true"
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Search keywords</p>
            </ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MovieSidebar;
