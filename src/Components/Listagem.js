import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Aboutlais from "./Aboutlais";
import Aboutcarlos from "./Aboutcarlos";
import Aboutsalomao from "./Aboutsalomao";
import Aboutdeborah from "./Aboutdeborah";
import Aboutlayane from "./Aboutlayane";
import Team from "./Team";
import Portfoliopessoas from "./Portfoliopessoas";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Objetivo from "./Objetivo";
import $ from "jquery";
import ReactGA from "react-ga";



class Listagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
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
        <Header data={this.state.resumeData.main} />
        <Objetivo data={this.state.resumeData.main} />
        <Portfoliopessoas data={this.state.resumeData.portfolio} />
        <Portfolio data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default Listagem;
