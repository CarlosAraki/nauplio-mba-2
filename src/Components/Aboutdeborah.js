import React, { Component } from "react";
import Fade from "react-reveal";
import Slide from "react-reveal";

class Aboutdeborah extends Component {

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

    const deborah = this.props.data.team.deborah;

    const skills = this.props.data.team.deborah.skills.map((skills) => {
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

    const personalidade = this.props.data.team.deborah.personalidade.map((personalidade) => {
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
                src={"images/" + deborah.profile}
                alt="deborah Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h1>{deborah.name}</h1>
              <hr/>
              <p>{deborah.bio}</p>
              <h2>Hard Skills</h2>
              <p>{'\u2022'+" "+deborah.hardskills1}</p>
              <p>{'\u2022'+" "+deborah.hardskills2}</p>
              <p>{'\u2022'+" "+deborah.hardskills3}</p>
              <p>{'\u2022'+" "+deborah.hardskills4}</p>
              <h2>Soft Skills</h2>
              <p>{'\u2022'+" "+deborah.softskills1}</p>
              <h2>Projetos</h2>
              <p>{'\u2022'+" "+deborah.projetos1}</p>
              <p>{'\u2022'+" "+deborah.projetos2}</p>
              <p>{'\u2022'+" "+deborah.projetos3}</p>
              <p>{'\u2022'+" "+deborah.projetos4}</p>
              <p>{'\u2022'+" "+deborah.projetos5}</p>
              <h2>Trabalhos Voluntários</h2>
              <p>{'\u2022'+" "+deborah.tv1}</p>
              <p>{'\u2022'+" "+deborah.tv2}</p>
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
                    <a href={deborah.linkedin} className="button">
                      <i className="fa fa-linkedin"></i> LinkedIn
                    </a>
                    <a href={deborah.project} className="button btn project-btn">
                      <i className="fa fa-book"> Ebook</i> 
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

export default Aboutdeborah;
