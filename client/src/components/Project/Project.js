import React from "react";
import "./Project.css";
import { useAnimation } from "../../context/Context";
import Card from "../Card/Card";
import ProjectDetails from "../../ProjectDetails";

export default function Project() {
  const animationContext = useAnimation();

  return (
    <section className="ProjectSection" style={animationContext.animation}>
      {ProjectDetails.map((project) => (
        <Card
          key={Math.random()}
          title={project.title}
          context={project.context}
          description={project.description}
          stack={project.stack}
          image={project.image}
        />
      ))}
    </section>
  );
}
