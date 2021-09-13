import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const qualhab = this.props.data.qualhab;
   console.log(qualhab)

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Qualidades e Habilidades</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <p>{'\u2022'+" "+qualhab.qual1}</p>
                <p>{'\u2022'+" "+qualhab.qual2}</p>
                <p>{'\u2022'+" "+qualhab.qual3}</p>
                 <div style={{ textAlign: "center" }} className="item-wrap">
                  <Zmage alt={qualhab.title} src={"images/" + qualhab.picture} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
