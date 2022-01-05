import React from "react";
import styled from "styled-components";
import { useAnimation } from "../../context/Context";
import "./Resume.css";

const PDFContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  text-align: center;
`;

export default function Resume() {
  const animationContext = useAnimation();

  return (
    <section>
      <PDFContainer>
        <iframe
          src="Resume.pdf#view=FitH"
          title="resume-viewer"
          style={animationContext.animation}
        ></iframe>
      </PDFContainer>
    </section>
  );
}
