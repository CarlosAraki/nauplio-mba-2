import React, { Component } from "react";
import Fade from "react-reveal";
import Slide from "react-reveal";

class Aboutlais extends Component {

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
    const lais = this.props.data.team.lais;

    const skills = this.props.data.team.lais.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    const personalidade = this.props.data.team.lais.personalidade.map((personalidade) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + personalidade.name.toLowerCase();
      const width = personalidade.level;

      return (
        <li key={personalidade.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{personalidade.name}</em>
        </li>
      );
    });


    return (
      <section id="about-white">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={"images/" + lais.profile}
                alt="lais Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h1>{lais.name}</h1>
              <hr/>
              <p>{lais.bio}</p>
              <h2>Hard Skills</h2>
              <p>{'\u2022'+" "+lais.hardskills1}</p>
              <h2>Soft Skills</h2>
              <p>{'\u2022'+" "+lais.softskills1}</p>
              <h2>Projetos</h2>
              <p>{'\u2022'+" "+lais.projetos1}</p>
              <h2>Trabalhos Voluntários</h2>
              <p>{'\u2022'+" "+lais.tv1}</p>
              <div className="row">
                <div className="columns contact-details">
                <Slide left duration={1300}>
                  <div className="row skill">
                    
                    <div className="nine columns main-col">
                      <h2>Comportamento</h2>

                      <div className="bars">
                        <ul className="skills">{skills}</ul>
                      </div>
                    </div>
                  </div>
                </Slide>
                </div>
                <div className="columns contact-details">
                  <Slide left duration={1300}>
                    <div className="row skill">
                      
                      <div className="nine columns main-col">
                        <h2>Personalidade</h2>

                        <div className="bars">
                          <ul className="skills">{personalidade}</ul>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
              </div>
              
              <p>
                
              <Fade bottom duration={2000}>
                <ul className="social">
                  <a href={lais.linkedin} className="button">
                    <i className="fa fa-linkedin"></i> LinkedIn
                  </a>
                </ul>
              </Fade>
              </p>
              <hr />

            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Aboutlais;
