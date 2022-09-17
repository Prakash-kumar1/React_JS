import React, { Component } from 'react'

// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

//    OR  We can also write this way

import {Card , ListGroup} from 'react-bootstrap';
export default class Cards extends Component {
  render() {
    return (
      <div>
        <h1>Creating a Card from react-bootstrap</h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="C:\Users\Monika Priya Singh\OneDrive\Pictures\Screenshots\download.jpg" />
      <Card.Body>
        <Card.Title>Rajesh Saini</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      </div>
    )
  }
}
