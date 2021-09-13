import React, { Component } from "react";
import Fade from "react-reveal";
import Slide from "react-reveal";

class Aboutcarlos extends Component {

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
    const carlos = this.props.data.team.carlos;

    const skills = this.props.data.team.carlos.skills.map((skills) => {
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

    const personalidade = this.props.data.team.carlos.personalidade.map((personalidade) => {
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
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={"images/" + carlos.profile}
                alt="carlos Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h1>{carlos.name}</h1>
              <hr/>
              <p>{carlos.bio}</p>
              <h2>Hard Skills</h2>
              <p>{'\u2022'+" "+carlos.hardskills1}</p>
              <p>{'\u2022'+" "+carlos.hardskills2}</p>
              <p>{'\u2022'+" "+carlos.hardskills3}</p>
              <p>{'\u2022'+" "+carlos.hardskills4}</p>
              <p>{'\u2022'+" "+carlos.hardskills5}</p>
              <h2>Soft Skills</h2>
              <p>{'\u2022'+" "+carlos.softskills1}</p>
              <h2>Projetos</h2>
              <p>{'\u2022'+" "+carlos.projetos1}</p>
              <p>{'\u2022'+" "+carlos.projetos2}</p>
              <p>{'\u2022'+" "+carlos.projetos3}</p>
              <h2>Trabalhos Voluntários</h2>
              <p>{'\u2022'+" "+carlos.tv1}</p>
              <p>{'\u2022'+" "+carlos.tv2}</p>
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
                    <a href={carlos.linkedin} className="button">
                      <i className="fa fa-linkedin"></i> LinkedIn
                    </a>
                    <a href={carlos.project} className="button btn project-btn">
                      <i className="fa fa-book"></i> Automática 2015
                    </a>
                    <a href={carlos.github} className="button btn github-btn">
                      <i className="fa fa-github"></i>Github
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

export default Aboutcarlos;
