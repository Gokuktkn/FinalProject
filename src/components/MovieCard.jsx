import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

const MovieCard = ({ title, overview, img }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500/${img}`;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={imageURL} className="movie-card-image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="overview">
            {overview}
          </Card.Text>
          <Button variant="primary">See more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
