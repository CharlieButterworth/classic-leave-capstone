import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "./Gear.css"

export const Gear = ({ garage }) => (
    <section className="gear">
        <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>Gear</Card.Title>
    <Card.Text>
     
    <p className="gear__name">{garage.gearName}</p>
      
    </Card.Text>
    <Button variant="primary">See Pic</Button>
  </Card.Body>
</Card>

</section>
)