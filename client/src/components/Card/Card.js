import React from "react";
import styled from "styled-components";
import "./Card.css";

const CardContainer = styled.div`
  width: 80%;
  border: 3px solid black;
  margin-bottom: 1rem;
  max-width: 800px;
  display: flex;
  border-radius: 15px;
`;

export default function Card({ title, context, description, stack, image }) {
  return (
    <CardContainer>
      <div className="cardDescription">
        <div className="cardTitle">{title}</div>
        <div className="projectContext">{context}</div>
        <div className="projectDescription">{description}</div>
        <div className="projectStack">{stack}</div>
      </div>
      <img className="cardImage" src={image} />
    </CardContainer>
  );
}
