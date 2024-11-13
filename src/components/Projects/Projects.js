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
              description="•	Developed user interface using HTML5, CSS3, Vuetify, Typescript, and Vue JS that meets accessibility and web browser standards for websites.
•	Worked with CSS3 in designing templates for use in all pages on the website working with positioning, text, padding, border, margin, CSS background and div blocks.
•	Developed user interface by using Vuetify, Figma for SPA development.
•	Used Vue JS single file components for data manipulations and to display data in company standard format. 
•	Used Vue-Router to turn application into Single Page Application.
•	Experienced in developing components also used Axios with Vuejs for making AJAX Calls.
•	Maintained states in the stores and dispatched the actions using Pinia.
•	Manipulated DOM, handled events and applied animation effects with Vue.js.
•	Used Nuxt.js for Server-side rendering which optimized data loading tremendously. Used NuxtContent for displaying blogs from Medium.com of Curiouser account. Created md files to showcase all blogs using NuxtContent.

"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={curiouser}
              isBlog={false}
              title="Curiouser App Alice"
              description="•	Worked on Vue JS components, Forms, Events, Router, Animations, themes and Vuetify components.
•	Implemented complete website curiouser.ai end to end using Vue.js, typescript, HTML5, CSS3. 
•	Implemented video carousel to display video of selected team members. Used vuetify component slide groups to display carousel by giving input as YouTube video id.
•	Implemented modules into NodeJS to integrate designs and requirement.
•	Worked closely with the Back-End team and design team to display data using the Custom Components, library Components, and layout.
•	Developed API for using AWS Amplify to manage the servers, user registrations/login and run the code in the AWS.
•	Implemented product dashboard to display generated conversations with Alice a reflective AI. This includes showing each conversation in vuetify card and adding delete, download, progress bar for each conversation. Used Flexbox for responsive layout.
•	Implemented product chat interface this includes ChatGPT kind of interface, in which user asks questions to Alice and she gives responses to user. Used Vuetify textarea and other components.
•	Used Git for version controlling and regularly pushed the code to GitHub.

"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Barclays app"
              description="•	Implemented complete banking application of Barclays end to end, focusing on user experience and responsive design, showcasing my commitment to creating intuitive interfaces. I was involved in complete SDLC right from creating POCs to successful delivery.
•	Created different forms of Banking app including search functionality. Implemented admin section which maintains user registrations and users.
•	Implemented login/register forms based on type of users and show navigation menu based on user type.
•	Extensive experience in developing web pages quickly and effectively using jQuery, HTML5, CSS3, Responsive Web Design, Bootstrap and experience in making web pages cross browser compatible.
•	Experienced in JavaScript and Typescript, also including DOM manipulation and the JavaScript object model
•	Updated the application with popular React.js workflows.
•	Develop front-end and UI development across multiple product sets
•	Used newer specifications of ECMAScript in the application.
•	Designed Responsive UI design using HTML5 and CSS3.

"
                    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
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
            
              isBlog={false}
              title="Totalmedia"
              description="Totalmedia is a video-on-demand platform that allows users to browse, watch, and manage a personalized collection of movies and TV shows. Designed with a user-centric approach, the interface prioritizes seamless navigation, rich media previews, and engaging content recommendations, mirroring the core functionalities of popular streaming services like Netflix. Built using Angular, typescript and bootstrap"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Property Ecommerce Website"
              description="•	Developed a dynamic dashboard with movable widgets and a transaction system generating PDFs on-the-fly, demonstrating my proficiency in PHP, MySQL, JavaScript and jQuery.
•	Implemented a comprehensive investor registration module, highlighting my experience in developing CRUD applications and ensuring user-friendly interfaces. 
"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Juvlon"
              description="•	Implemented major features in Juvoln marketing application, in which user can send mails to million subscribed users. This includes new feature in template (CMS) editor to add/edit/delete/drag/drop design different blocks to create custom design, export mailers list to user, archived reports of old sent mailers etc. Implemented using PHP, MySQL, JavaScript, html, and jQuery.
"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Webworx Ecommerce Projects"
              description="•	Built five e-commerce websites end to end, incorporating PayPal systems using PHP and MySQL, showcasing my ability to create seamless online shopping experiences. This includes displaying items, add to cart functionality, checkout functionality, return to website after checkout from PayPal, admin functionality to add items from admin module.
•	Implemented RESTful APIs in PHP and integrated MySQL databases.
•	Worked on WordPress CMS editor and created custom themes.
•	Wrote queries in MySQL databases with different types of joins to get optimized results in least time.
•	Implemented site language translation features, demonstrating my understanding of internationalization and the importance of accessible web design.
•	Implemented different markers in CMS editor like adding property marker by adding it in template it builds whole new website, search functionality marker, adding new videos feature etc.

"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
