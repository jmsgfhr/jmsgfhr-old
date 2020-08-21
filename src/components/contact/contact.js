import React from "react";
import axios from 'axios';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "https://jmsgfhr.herokuapp.com/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {

        this.setState({ name: '', email: '', message: '' })
    }

    render() {
        return (
            <div className="container">
                <div className="card-form">
                <form id="contact-form" className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <h3>Contato</h3>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Nome:</label>
                        <input type="text" className="form-input" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="exampleInputEmail1">Email:</label>
                        <input type="email" className="form-input" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Mensagem:</label>
                        <textarea className="form-area" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="s-button">Enviar</button>
                </form>
                </div>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}

export default Contact;