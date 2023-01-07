import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {

  // checking for snacks or drinks instead of creating an entire new component for each.
  let items;
  let source;
  if (snacks) {
    items = snacks;
    source = 'Snacks';
  } else {
    items = drinks;
    source = 'Drinks';
  }

  const sourceLink = source.toLowerCase();

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {source}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${sourceLink}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
            <Link to={`/add/${sourceLink}/new`}>
              <ListGroupItem>Add a new {sourceLink}!</ListGroupItem>
            </Link>
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
