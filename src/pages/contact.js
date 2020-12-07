import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "../components/pageHeader"

import "./contact.scss"

import Smartphone from "../assets/svg/smartphone.svg"
import Telephone from "../assets/svg/phone.svg"
import Mail from "../assets/svg/mail.svg"
import Pin from "../assets/svg/map-pin.svg"

import FacebookSVG from "../assets/svg/facebook.svg"
import TwitterSVG from "../assets/svg/twitter.svg"
import InstagramSVG from "../assets/svg/instagram.svg"
import LinkedinSVG from "../assets/svg/linkedin.svg"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactdataQuery {
      site {
        siteMetadata {
          title
          email
          social {
            facebook
            twitter
            instagram
            linkedin
          }
          contact {
            mobile
            telephone
          }
          address
          map
        }
      }
    }
  `)

  const { title, email, social, contact, address, map } = data.site.siteMetadata
  return (
    <section id="contact">
      <PageHeader title="Contact" />
      <Container>
        <main className="contact-page section-lg">
          <Row>
            <Col lg="8" className="contact-form border-right pl-5 pr-5">
              <h2 className="header-title text-center font-weight-bold">
                Kontaktieren Sie uns
              </h2>
              <p className="contact-description font-size-90 text-center text-muted mb-4">
                Wir sind über die herkömmlichen Wege erreichbar. Am besten rufen sie uns an oder schicken Sie uns eine Mail.
                Wir sind auch ausserhalb unserer Öffnungszeiten erreichbar - auch per Whatsapp möglich.
                
              </p>
              <form
                name="contact"
                method="POST"
                data-netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Row>
                  <Col className="mb-4" md="6">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="userName"
                      placeholder=" Name*"
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <input
                      className="form-control"
                      type="number"
                      name="phone"
                      id="userName"
                      placeholder="Telefon"
                    />
                  </Col>
                  <Col className="mb-1" md="12">
                    <textarea
                      className="form-control"
                      type="textarea"
                      name="message"
                      id="message"
                      placeholder="Nachricht*"
                      rows="7"
                      required
                    ></textarea>
                  </Col>
                  {/* <Col className="mb-4" md="12">
                    <input
                      className="form-control-file"
                      type="file"
                      name="file"
                      id="attachedFile"
                    />
                  </Col> */}
                  <Col className="mb-4" md="6">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="userEmail"
                      placeholder="E-Mail*"
                      required
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <button
                      className="text-dark font-weight-bold text-uppercase btn btn-secondary btn-block"
                      type="submit"
                    >
                      Senden
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
            <Col lg="4" className="contact-info pl-5 pr-5">
              <aside className="contact-info">
                <section className="get-social border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">Social Media</p>
                  <Row className="ml-0">
                    <a
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookSVG className="fill-svg" />
                    </a>
                    <a
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterSVG className="fill-svg" />
                    </a>
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramSVG className="stroke-svg" />
                    </a>
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinSVG className="stroke-svg" />
                    </a>
                  </Row>
                </section>
                <section className="telephone border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">
                    Telefon
                  </p>
                  <Row className="ml-0">
                    <Telephone className="fill-svg fill-color" />{" "}
                    {contact.telephone}
                  </Row>
                </section>
                {/* <section className="mobilephone border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">
                    Mobile Phone
                  </p>
                  <Row className="ml-0">
                    <Smartphone className="stroke-svg stroke-color" />{" "}
                    {contact.mobile}
                  </Row>
                </section> */}
                <section className="email border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">E-mail</p>
                  <Row className="ml-0">
                    <Mail className="stroke-svg stroke-color" />
                    <a href="mailto:info@gewerbe-seiten.ch"> info@gewerbe-seiten.ch </a>
                  </Row>
                </section>
                <section className="address mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">Addresse</p>
                  <Row className="ml-0 flex-nowrap">
                    <Pin className="fill-svg fill-color" /> <p>{address}</p>
                  </Row>
                </section>
              </aside>
            </Col>
          </Row>
        </main>
      </Container>
      <iframe
        src={map}
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
        title={`${title} office map`}
      ></iframe>
    </section>
  )
}

export default ContactPage
