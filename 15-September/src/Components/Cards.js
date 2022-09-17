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
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
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
