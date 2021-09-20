import React, { Component } from 'react';
import TermsMarkdown from './text.md';
import ReactMarkdown from 'react-markdown';
import marked from "marked";
import $ from "jquery";

class Terms extends Component {


    
    getTextData() {
        $.ajax({
            url: "./text.md",
            dataType: "text",
            cache: false,
            success: function(data) {
                this.setState({ markdown: data });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            alert(err);
            }
        });
    }
    
    componentDidMount() {
        this.getTextData();
    }

    constructor(props) {
        super(props);
        this.state = { markdown: '' };
    }

  

  render() {
    const { markdown } = this.state;
    const html = marked(markdown);

    console.log(markdown)
    console.log(html)
    return (
      <section>
        <article dangerouslySetInnerHTML={{__html: html}}></article>
      </section>
    )
  }
}

export default Terms;