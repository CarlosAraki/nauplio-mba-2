import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const description2 = this.props.data.description2;
    const description1 = this.props.data.description1;
    const description3 = this.props.data.description3;
    const description4 = this.props.data.description4;
    const logopic = "images/" + this.props.data.imagelogo;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Quem Somos?
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Equipe
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Qualidades e Habilidades
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
            <div className="responsive-headline">
              <img
                className="profile-pic"
                src={logopic}
                alt="Logo PIc"
              />
            </div>
            <hr />

              <h1 className="responsive-headline">{name}</h1>
              <h3  className="responsive-headline" >{description}.</h3>
              <h3  className="responsive-headline">{description1}.</h3>
              <h3  className="responsive-headline">{description2}.</h3>
              <hr />
              <h3  className="responsive-headline">{description4}</h3>
            </Fade>
            
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
