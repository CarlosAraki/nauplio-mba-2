import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Aboutlais from "./Components/Aboutlais";
import Aboutcarlos from "./Components/Aboutcarlos";
import Aboutsalomao from "./Components/Aboutsalomao";
import Aboutdeborah from "./Components/Aboutdeborah";
import Aboutlayane from "./Components/Aboutlayane";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Objetivo from "./Components/Objetivo";
import Routes from "./routes";

class App extends Component {
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
      <div className="App">
        {/* <Header data={this.state.resumeData.main} />
        <Objetivo data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Aboutlais data={this.state.resumeData.main} />
        <Aboutcarlos data={this.state.resumeData.main} />
        <Aboutsalomao data={this.state.resumeData.main} />
        <Aboutdeborah data={this.state.resumeData.main} />
        <Aboutlayane data={this.state.resumeData.main} />
        <Team data={this.state.resumeData.main} /> 
         <Resume data={this.state.resumeData.resume} /> 
        <Portfolio data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} /> */}

        <Routes/>
      </div>
    );
  }
}

export default App;
