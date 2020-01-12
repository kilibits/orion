import * as React from "react";
import { Profile } from "../common/models/Profile";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export interface ProfileProps{
  profile: Profile
}

const ProfileCard = (profileProps: ProfileProps) => {
  const profile = profileProps.profile;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://placeimg.com/100/180/any" />
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