import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tejaswini Bhokare </span>
            from <span className="purple"> Greenville, South Carolina.</span>
            <br />
            I am currently employed as a Senior Fullstack Engineer at Curiouser.ai.
            <br />
            I have completed Bachelors of Engineering in Computer Science from Cummins College of Engineering, Pune, India.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Baking and decorating cakes
            </li>
          
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
