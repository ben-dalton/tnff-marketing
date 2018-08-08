import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactEmail: '',
      contactMessage: '',
      response: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(key, value) {
    this.setState({
      [key]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ response: { type: 'info', message: 'Sending…' } });
    const data = {
      form_name: this.state.contactName,
      form_email: this.state.contactEmail,
      form_msg: this.state.contactMessage,
    };

    axios({
      url: '/mailer.php',
      method: 'POST',
      data: qs.stringify(data, { parseArrays: false }),
    })
      .then(() => {
        this.setState({
          response: {
            type: 'success',
            message:
              'We have received your message and will get in touch shortly. Thanks!',
          },
        });
      })
      .catch((err) => {
        this.setState({
          response: {
            type: 'danger',
            message: `Sorry, there has been an error. Please try again later. ${err}`,
            error: err,
          },
        });
      });
  }
  render() {
    return (
      <div className="container" style={{ clear: 'both' }}>
        <div style={{ fontSize: '18px', padding: '20px 0' }}>
          Let us know if you have any questions or comments. We would love to
          hear from you! from you!
        </div>
        {/* <Wufoo userName="benadalton" formHash="z13ad5h30euecdx" header="hide" /> */}
        {this.state.response && (
          <div className={`alert alert-${this.state.response.type}`}>
            {this.state.response.message}
          </div>
        )}
        <form
          id="contactForm"
          method="POST"
          action="mailer.php"
          onSubmit={e => this.handleSubmit(e)}
        >
          <fieldset className="form-group">
            <label htmlFor="form_name">Name</label>
            <input
              type="text"
              value={this.state.contactName}
              className="form-control"
              id="form_name"
              onChange={e =>
                this.handleInputChange('contactName', e.target.value)
              }
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="form_email">E-mail:</label>
            <input
              value={this.state.contactEmail}
              className="form-control"
              id="form_email"
              type="email"
              onChange={e =>
                this.handleInputChange('contactEmail', e.target.value)
              }
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="form_msg">Message:</label>
            <textarea
              value={this.state.contactMessage}
              className="form-control"
              id="form_msg"
              onChange={e =>
                this.handleInputChange('contactMessage', e.target.value)
              }
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
