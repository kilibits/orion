import * as React from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import './SearchComponent.css';

const SearchComponent = () => {
  return (
    <section className="landingSection">
    <div>
      <h1>Finding your next home has never been easier </h1>
    <Container className="searchContainer">
      <Form className="searchForm">
        <FormGroup >
          <Label className="searchLabel" for="searchInput">Start by telling us where you want to live ...</Label>
          <Input className="searchInput" type="text" name="location" id="searchInput" placeholder="e.g Dodoma, Kinondoni" />
        </FormGroup>
        <div className="buttonsContainer">
        <div>
        <Button className="searchButton">Buy</Button>
        </div>
        <div>
        <Button className="searchButton">Rent</Button>
        </div>
        </div>
      </Form>
    </Container>
    </div>
    {/* <div className="landingImageDiv">
      <img src="http://placeimg.com/640/480/arch"/>
    </div> */}
    </section>
  )
}

export default SearchComponent;