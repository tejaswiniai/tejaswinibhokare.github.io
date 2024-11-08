import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/curiouser.png";
import curiouser from "../../Assets/Projects/curiouserApp.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My projects <strong className="purple"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Curiouser.Ai"
              description="•	Used Vuetify to create components like card display, modal dialogs, scrollers etc. 
•	Design and develop these Web Applications using Vue, NodeJS, HTML/HTML5, SASS media queries.
•	Proficient in Vue Routing, customs components to reuse common functionalities.
•	Knowledge and worked on Contentful/netlify headless CMS to integrate blogs in the system.
•	Integrated RESTful APIs using Axios and handled state management Pinia, optimizing data flow and performance in applications. 
"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={curiouser}
              isBlog={false}
              title="Curiouser App Alice"
              description="•	Created application using Vue JS, Typescript, Rest API and HTML5/CSS3.
•	Architected and implemented complex user interfaces using Nuxt.js, achieving a 30% increase in page speed and performance.
•	Collaborated with designers and stakeholders to bring pixel-perfect designs to life in Figma, enhancing UI consistency and usability across platforms.
•	Optimized applications for maximum speed and scalability using lazy loading, code splitting, and server-side rendering (SSR).
"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Barclays app"
              description="•	Led and supervised the development of a Barclays’s banking application using ReactJS, integrating RESTful APIs for seamless data exchange between frontend and backend, demonstrating my ability to adapt and apply new technologies effectively.
•	Developed and maintained responsive websites and web applications using ReactJS, Angular, HTML, CSS, and JavaScript.
•	Collaborated with UI designers and backend developers to implement user interface designs and features.
"
                    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MobiTV"
              description="•	Developed single-page applications in Angular and ReactJS for the telecommunications domain, emphasizing mobile-first design principles and responsive layouts. Worked for US based Clients extensively.
•	Conducted browser compatibility testing and resolved cross-browser issues.
•	 Used AngularJS Services $http for consuming REST API’s and utilized Postman tool to debug Web API.
•	Used Angular Reactive forms to implement complex forms and performed the validations using Form Builder.
"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Acrolinx"
              description="•	Pioneered the integration of a spell checker application, demonstrating my ability to lead projects from conception to completion while ensuring high-quality standards. Worked for German based client.
•	Collaborated closely with cross-functional teams to deliver projects that met all technical and business requirements, highlighting my strong teamwork and communication skills.
•	Performed unit testing using Mocha.
User can use this lightweight Acrolinx editor to check content in various formats. Integrated webSDK in various CMS editors like Google Docs, CKEditor"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Totalmedia"
              description="Totalmedia is a video-on-demand platform that allows users to browse, watch, and manage a personalized collection of movies and TV shows. Designed with a user-centric approach, the interface prioritizes seamless navigation, rich media previews, and engaging content recommendations, mirroring the core functionalities of popular streaming services like Netflix. Built using Angular, typescript and bootstrap"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
