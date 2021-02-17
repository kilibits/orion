import * as React from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import './SearchComponent.css';

const SearchComponent = () => {
  return (
    <Container className="searchContainer">
      <Form className="searchForm">
        <FormGroup >
          <Label className="searchLabel" for="locationSearch">I want to live here ...</Label>
          <Input className="searchInput" type="email" name="email" id="exampleEmail" placeholder="like: Dodoma, Kinondoni" />
        </FormGroup>
        <div className="buttonsContainer">
        <Button className="searchButton">Buy</Button>
        <Button className="searchButton">Rent</Button>
        </div>
      </Form>
    </Container>
  )
}

export default SearchComponent;