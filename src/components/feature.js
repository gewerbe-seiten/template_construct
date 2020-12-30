import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import "./project.scss"

import ProjectCardFeat from "./projCardFeatured"

const Feature = ({ title, projects }) => {
  return (
    <div className="project section-lg" id="feature">
      <Container>
        <h2 className="header-title text-center font-weight-bold text-uppercase">
          {title}
        </h2>

        <section className="gallery">
          <Row>
            {projects
              .filter(project => project.node.featured === true)
              .map(project => {
                return (

                  <Col lg="4" md="6" sm="12">

                    <ProjectCardFeat proj={project.node} />
                    
                  </Col>
                 
                )
              })}
          </Row>
        </section>
        <section className="text-center mt-5 font-size-s2">
          {/* <p className="">Mehr Projekte</p> */}
          <Link to="/projects/#project">
            <Button outline color="dark">
              Alle Projekte
            </Button>
          </Link>
        </section>
      </Container>
    </div>
  )
}

export default Feature
