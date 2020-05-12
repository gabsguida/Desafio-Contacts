import React from "react";
import Contact from './Contact'

class Contacts extends React.Component {
	header = {
		avatar: "",
		name: "Nome",
		phone: "Telefone",
		country: "País",
		admissionDate: "Admissão",
		company: "Empresa",
		department: "Departamento"
	}
	
	render() {
		const contacts = this.props.contacts ? this.props.contacts : [];
		return (
			<div className="container" data-testid="contacts">
          		<section className="contacts">
					<Contact data={this.header} data-testid="contact-name"/>
					{contacts.map((item) => <Contact data={item} key={item.id} />)} 
				</section>
			</div>
		);
	}
}

export default Contacts;