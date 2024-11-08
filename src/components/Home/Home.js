import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/teju.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
       
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Tejaswini Bhokare</strong>
              </h1>
              <h2 style={{paddingLeft:45}}> Senior Fullstack Engineer   <b className="purple">
               React
                </b> |
                <b className="purple">
               Vue
                </b> |
                <b className="purple">
               Angular
                </b>

                
                </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
              Senior Fullstack Engineer with over 10 years of experience designing and developing responsive, <br></br> high-performance web applications using modern frameworks and tools.<br></br> <br></br> Proficient in React, Angular, and Vue, with extensive hands-on experience in UI/UX design using Figma. <br></br><br></br> Skilled in optimizing applications with Next.js and Nuxt, <br></br>and deploying seamlessly to production with Netlify. Known for delivering scalable, maintainable code and creating dynamic, user-centered applications.
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
            <h1 className="heading-name">
                
                Work Experience:
              </h1>
              <br></br>
            </Col>
            <Col md={8}>
              <h5> Curiouser.ai, Remote <br></br>
Senior Full Stack Engineer<br></br>
July 2024 – Till date
</h5><br></br>
 <h5> Cognizant Technology Solutions, India <br></br>
Senior Associate<br></br>
Jan 2016 – October 2017

</h5><br></br>
 <h5> Persistent Systems Limited, India <br></br>
Module Lead<br></br>
Nov 2012 – Jan 2016

</h5><br></br>
 <h5> Cybage software limited, India<br></br>
Senior Software Engineer<br></br>
April 2011 – March 2012

</h5><br></br>
 <h5> Niche Software solutions, India<br></br>
Senior Software Engineer <br></br>
Feb 2010 – April 2011

</h5><br></br>

<h5> WebworxIndia Pvt Ltd, India<br></br>
Senior Software Engineer<br></br>
Jan 2007 – Feb 2010


</h5><br></br>
            </Col>
          </Row>
        </Container>
      </Container>
  
    </section>
  );
}

export default Home;
