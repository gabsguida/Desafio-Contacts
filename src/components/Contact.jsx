import React from 'react';

function ContactText(props) {
  return (
    <span className="contact__data" data-testid={props.testid}>{props.text}</span>
  )
}

function ContactAvatar(props) {
  return(
    <span className="contact__avatar">
      <img src={props.avatar} alt="Avatar" /> 
    </span>
  )
  
}

class Contact extends React.Component {
  leadingZero(num, places) {
    return String(num).padStart(places, '0'); // adiciona os zeros na data
  }

  formatDate(dateStr) {
    const date = new Date(dateStr);
    if(isNaN(date.getTime())){
      return dateStr;
    }
    return `${this.leadingZero(date.getDate(), 2)}/${this.leadingZero(date.getMonth() + 1, 2)}/${date.getFullYear()}`; 
  }

  render() {
    return (
      <article className="contact" data-testid="contact">
        <ContactAvatar avatar={this.props.data.avatar} />
        <ContactText testid="contact-name" text={this.props.data.name} />
        <ContactText testid="contact-phone" text={this.props.data.phone} />
        <ContactText testid="contact-country" text={this.props.data.country} />
        <ContactText testid="contact-date" text={this.formatDate(this.props.data.admissionDate)} />
        <ContactText testid="contact-company" text={this.props.data.company} />
        <ContactText text={this.props.data.department} />
			</article>
    );
  }
}

export default Contact;
