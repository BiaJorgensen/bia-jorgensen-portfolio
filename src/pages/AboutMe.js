import React from 'react';
import Bia from '../assets/images/bia-jorgensen.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function AboutMe() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h2 className="my-3">About me</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={4} sm={3} >
          <Image src={Bia} alt='Bia Jorgensen' roundedCircle fluid thumbnail className="mx-auto"/>
        </Col>
        <Col xs={12} sm={9}>
          <p>As a recent graduate of the coding bootcamp at the University of Minnesota, I am excited to embark on a career in the technology industry. My passion for coding comes from my background in Technology in Industrial Automation, which I studied at a college in Brazil. Since then, I have improved my skills in various programming languages and am proficient in web development. I am also a team player who values collaboration and communication in a work environment. When I am not coding, I enjoy spending time with my loved ones, including my husband and our furry baby, Charlie. I am eager to apply my skills and contribute to innovative projects in the Software Engineering field.<br></br><br></br>Thank you for visiting my website! Here, you can navigate to the Portfolio page to see my most recent coding projects. When you hover over the images, you will be presented with links to the deployed pages and their corresponding Github repositories, so you can easily explore and review the code. Additionally, the Resume page highlights some of the technologies I am familiar with, and you can also download my resume. If you have any questions or would like to discuss potential projects or opportunities, you can send me a message through the Contact page.</p>
        </Col>
      </Row>
    </Container>
  )
}
