import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <p>We have a limited selection of Snacks: {snacks.length} and Drinks: {drinks.length}</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
