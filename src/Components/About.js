import React, { Component } from "react";
import Fade from "react-reveal";
import Slide from "react-reveal";

class About extends Component {

  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 


  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const barbara = this.props.data.team.barbara;

  


    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={"images/" + barbara.profile}
                alt="Barbara Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h1>Bárbara Pires</h1>
              <hr/>
              <p>{barbara.bio}</p>
              <h2>Hard Skills</h2>
              <p>{'\u2022'+" "+barbara.hardskills1}</p>
              <p>{'\u2022'+" "+barbara.hardskills2}</p>
              <p>{'\u2022'+" "+barbara.hardskills3}</p>
              <h2>Soft Skills</h2>
              <p>{'\u2022'+" "+barbara.softskills1}</p>
              <h2>Projetos</h2>
              <p>{'\u2022'+" "+barbara.projetos1}</p>
              <p>{'\u2022'+" "+barbara.projetos2}</p>
              <p>{'\u2022'+" "+barbara.projetos3}</p>
              <h2>Trabalhos Voluntários</h2>
              <p>{'\u2022'+" "+barbara.tv1}</p>
              <div className="row">
                <div className="columns contact-details">
                  
                </div>
                <div className="columns download">
                  
                </div>
              </div>
              <p>
                <a href={barbara.linkedin} className="button">
                  <i className="fa fa-linkedin"></i> LinkedIn
                </a>
                <hr />
              <Fade bottom duration={2000}>
                <ul className="social">
                  <a href={project} className="button btn project-btn">
                    <i className="fa fa-book"></i>Project
                  </a>
                  <a href={github} className="button btn github-btn">
                    <i className="fa fa-github"></i>Github
                  </a>
                </ul>
              </Fade>
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
