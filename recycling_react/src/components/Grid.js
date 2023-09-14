import Container from 'react-bootstrap/Container';
import '../styles/Grid.css'; // Import the CSS file
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card.js';
import img1 from '../images/gift-card.jpg';
import img2 from '../images/parking.jpg';
import img3 from '../images/marketplace.jpeg';
import img4 from '../images/wu.jpeg'; 

function ContainerFluidExample() {
  return (
    <div className="container">
    <Container fluid>
      <Row>
        <Col className="img"><Card img={img1} title={"$5 Duke Store Gift Cards"} description={"[desc]"}></Card></Col>
        <Col className="img"><Card img={img2} title={"3 hour Duke parking pass"} description={"[desc]"}></Card></Col>
      </Row>
      <Row>
        <Col className="img"><Card img={img3} title={"$10 food point bonus"} description={"[desc]"}></Card></Col>
        <Col className="img"><Card img={img4} title={"$25 food point bonus"} description={"[desc]"}></Card></Col>
      </Row>
    </Container>
    </div>
  );
}

export default ContainerFluidExample;