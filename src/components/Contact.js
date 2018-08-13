import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import { css } from 'emotion';
import { colors } from '../utils/colors';

const button = css`
  background: ${colors.orange};
  color: white;
  float: right;
`;

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
      <div
        className="container-fluid"
        style={{ clear: 'both', marginBottom: '25px' }}
      >
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div style={{ fontSize: '18px', padding: '20px 0' }}>
              Let us know if you have any questions or comments. We would love
              to hear from you! from you!
            </div>
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
                  autoComplete="name"
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
                  autoComplete="email"
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
              <button className={`${button} btn btn-default`} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
