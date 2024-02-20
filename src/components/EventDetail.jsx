/*import { useParams } from "react-router-dom";

function EventDetails(){
    //destrucation sur tab et objets
    //objet declarer comme son nom 
    //tab mayhemch ismha ama ihem indice mteeha


    const {title,id} =useParams();
    console.log(title);
    console.log(id);

    return(
        <h1>hello details</h1>
    );
}
export default EventDetails;*/
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import events from "../events.json";

export default function EventDetails() {
  const   {name }  = useParams();
  const event = events.find((evt) => evt.name == name);
console.log(event)
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={`/images/${event.img}`}
            alt="Product Img"
            height="300"
          />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={12}>
              <h1>{event.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Description</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{event.description}</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Price</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{event.price} DT</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}