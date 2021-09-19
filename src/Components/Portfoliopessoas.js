import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;

class Portfoliopessoas extends Component {
  
  render() {
    if (!this.props.data) return null;
    const projects = this.props.data['projects'].map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          
          <div className="item-wrap">
            {/* <Zmage alt={} src= /> */}
            <a className="smoothscroll" href="team">
              <img
                  className="profile-pic2"
                  src={projectImage}
                  alt={projects.title}
                />
              <div style={{ textAlign: "center" }}>{projects.title}</div>
            </a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfoliopessoas">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Equipe</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-thirds s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfoliopessoas;
