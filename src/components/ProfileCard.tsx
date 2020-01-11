import * as React from "react";
import { Profile } from "../common/models/Profile";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const ProfileCard = (profile: Profile) => {

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/50px90" />
        <Card.Body>
          <Card.Title>{profile.name}</Card.Title>       
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{`Constituency - ${profile.constituency}`}</ListGroupItem>
            <ListGroupItem>{`Party - ${profile.party}`}</ListGroupItem>
        </ListGroup> 
        <Card.Body>
    <Card.Link href="#">Contact</Card.Link>
    <Card.Link href="/profile/:profileId">View Full Profile</Card.Link>
  </Card.Body>
      </Card>
    )
}

export default ProfileCard;