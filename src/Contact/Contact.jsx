import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formMessage: null
    }
  }

  /**
   * handleSubmit - make a request to the api
   *
   * This fn makes a http request to the api asking it
   * to send a message based on the form values.
   *
   * The api is expected to send the message and return a response
   * stating whether the message sent successfully or failed
   *
   * Currently the api only saves the form values in MongoDB
   * and sends a success response
   *
   */
  handleSubmit = (event) => {
    event.preventDefault();
    let request = {};
    request.method = 'post';
    request.headers = {'Content-Type': 'application/json'};
    request.body = JSON.stringify({
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value
    });
    fetch('http://localhost:3001/api/contact', request)
      .then(response => response.json())
      .then((data) => {
        console.log("RESPONSE DATA:  ", data);
      })
      .catch((error) => {
        console.log("FETCH ERR:  ", error);
      })
  }

  render() {
    return (
      <div id="contact">
        <h1>Reach Us Here</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="text" id="email" />
          <label>Subject</label>
          <input type="text" id="subject" />
          <label>Message</label>
          <textarea id="message" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default Contact;
