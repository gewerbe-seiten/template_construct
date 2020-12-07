import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./services.scss"

import Service from "./service"

import Bulldozer from "../images/icons/icon-bulldozer-74x74.png"
import Tassels from "../images/icons/icon-tassels-70x70.png"
import Ruler from "../images/icons/icon-ruler-45x71.png"

const Services = () => {
  const card = [
    {
      title: `Überarbeitung`,
      icon: Bulldozer,
      description: `Wir erstellen Webseiten. Mit der richtigen Technologie sidn sie für die nächsten 10 Jahre sicher.`,
    },
    {
      title: `Design`,
      icon: Tassels,
      description: `Wir liefern auf Anfrage auch gerne einzigartiges Design - alles ist möglich`,
    },
    {
      title: `Richtiger Code`,
      icon: Ruler,
      description: `Wir sind Fan von richtigem Code, welcher Ihrer Webseite den richtigen Schliff gibt `,
    },
  ]
  return (
    <div className="services" id="services">
      <Container>
        <Row>
          {card.map(service => {
            return (
              <Col md="6" lg="4">
                <Service services={service} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Services
