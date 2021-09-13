import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic1 = "images/" + this.props.data.image;
    const profilepics = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;
    const project = this.props.data.project;
    const github = this.props.data.github;
    const barbara = this.props.data.team.barbara;

    return (
      <section id="team">
        <Fade duration={1000}>
          <div className="row">
            <div >
              <img
                className="profile-pic"
                src={"images/" + barbara.profile}
                alt="Nordic Giant Profile Pic"
              />
              <br />
              <p>{barbara.littleDesc}</p>
              <br />
              <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
            </div>
          </div>
          <div className="row">
            <div >
              <img
                className="profile-pic"
                src={"images/" + barbara.profile}
                alt="Nordic Giant Profile Pic"
              />
              <br />
              <p>{barbara.littleDesc}</p>
              <br />
              <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
