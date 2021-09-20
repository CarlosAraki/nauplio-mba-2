import React, { Component } from "react";
import About from "./About";
import Header from "./Header";
import ParticlesBg from "particles-bg";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router'

import Aboutlais from "./Aboutlais";
import Aboutcarlos from "./Aboutcarlos";
import Aboutsalomao from "./Aboutsalomao";
import Aboutdeborah from "./Aboutdeborah";
import Aboutlayane from "./Aboutlayane";

import $ from "jquery";
import ReactGA from "react-ga";



class Team extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };
  }
  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  componentDidMount() {
    this.getResumeData();
  }
  render() {

    return (
      <div>
     
        <nav id="nav-wrap">
          

          <ul id="nav2" className="nav">
            <li >
              
              <a className="smoothscroll" href='/#home' >
                Voltar
              </a>
            </li>

            {/* <li >
              <a className="smoothscroll" href="/team#about">
                Barbara
              </a>
            </li>
            <li >
              <a className="smoothscroll" href="/team#aboutlais">
                Lais
              </a>
            </li>
            <li >
              <a className="smoothscroll" href="/team#aboutcarlos">
                Carlos
              </a>
            </li>
            <li >
              <a className="smoothscroll" href="/team#aboutsalomao">
                Salomao
              </a>
            </li>
            <li >
              <a className="smoothscroll" href="/team#aboutdeborah">
                Deborah
              </a>
            </li>
            <li >
              <a className="smoothscroll" href="/team#aboutlayane">
                Layane
              </a>
            </li> */}

           
          </ul>
        </nav>
        <About data={this.state.resumeData.main} />
        <Aboutlais data={this.state.resumeData.main} />
        <Aboutcarlos data={this.state.resumeData.main} />
        <Aboutsalomao data={this.state.resumeData.main} />
        <Aboutdeborah data={this.state.resumeData.main} />
        <Aboutlayane data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default Team;