import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Objetivo extends Component {
  render() {
    if (!this.props.data) return null;

    const focus = this.props.data.focus;

    return (
      <section id="objetivo">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Objetivo</h1>

              <div
                id="objetivo-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div style={{ textAlign: "center" }} className="item-wrap">
                    <img
                    src={"images/" + focus.picture}
                    alt="Obj Pic"
                  />
                </div>

                <p>{'\u2022'+" "+focus.foc1}</p>
                <p>{'\u2022'+" "+focus.foc2}</p>
                <p>{'\u2022'+" "+focus.foc3}</p>
                 
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Objetivo;
