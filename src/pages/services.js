import React from "react"
import { Container, Row, Col } from "reactstrap"

import PageHeader from "../components/pageHeader"
import Service from "../components/service"

import Bulldozer from "../images/icons/icon-bulldozer-74x74.png"
import Tassels from "../images/icons/icon-tassels-70x70.png"
import Ruler from "../images/icons/icon-ruler-45x71.png"
import Suitcase from "../images/icons/icon-suitcase-73x57.png"
import Relues from "../images/icons/icon-relues-63x64.png"
import Helmet from "../images/icons/icon-helmet-67x65.png"

const ServicesPage = () => {
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
    {
      title: `Alles in einem`,
      icon: Suitcase,
      description: `Wir sind auch ihre Texter, falls Sie selbst nicht schreiben möchten. `,
    },
    {
      title: `Flexibel`,
      icon: Relues,
      description: `Wir sind profis für Fotograpfie und Web Entwicklung - spezialisiert für Gerwerbe Webseiten.`,
    },
    {
      title: `Unterwegs`,
      icon: Helmet,
      description: `Wir sind in Zürich unterwegs für Fotos oder zur Besprechung.`,
    },
  ]
  return (
    <section id="services">
      <PageHeader title="Services" />
      <section className="services">
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
      </section>
    </section>
  )
}

export default ServicesPage
