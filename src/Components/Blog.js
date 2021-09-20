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
import Artigo from "./Artigo";
import Terms from "./Terms";



class Blog extends Component {
  
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
      <div id="objetivo">
        <Terms/>
       
      </div>
    );
  }
}

export default Blog;