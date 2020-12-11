import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>About Me</h1>
        <p style={{ color: "white" }}>
          I am a Bca(science) Graduate from Pune university, who is curious
          about data science, web and app development who likes to make stuff
          that actually matters.
        </p>

        <h1 style={{ color: "white" }}>Contacts</h1>
        <p style={{ color: "white" }}>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/pratiktiwari12/">Linkedin</a>
        </p>
        <p style={{ color: "white" }}>
          GitHub: <a href="https://github.com/pratiktiwari1212/">Github</a>
        </p>
        <p style={{ color: "white" }}>
          Email:{" "}
          <a href="pratiktiwari1212@gmail.com">pratiktiwari1212@gmail.com</a>
        </p>
      </div>
    );
  }
}

export default About;
