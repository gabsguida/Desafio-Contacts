import React from 'react';

function SearchField(props) {
	return(
		<div className="filters__search">
			<input 
			type="text" 
			className="filters__search__input" 
			placeholder="Pesquisar" 
			onKeyUp={props.handleKeyUp}
			/>
			<button className="filters__search__icon">
				<i className="fa fa-search"/>
			</button>
        </div>
	);
}

function Button(props){
	return(
		<button 
		className={"filters__item" + (props.isSelected ? " is-selected" : "")}
		onClick={props.handleClick}
		name={props.name}
		>
			{props.text} 
			<span className="fas fa-sort-down" />
	  	</button>
	)
}

class Filters extends React.Component {
	render() {
		return (
			<div className="container" data-testid="filters">
          		<section className="filters">
					<SearchField handleKeyUp={this.props.searchCallback}/>
					<Button 
					text="Nome"
					handleClick={this.props.sortCallback}
					name="name"
					isSelected = {this.props.sortedBy === "name"}
					/>
					<Button 
					text="País" 
					handleClick={this.props.sortCallback}
					name="country"
					isSelected = {this.props.sortedBy === "country"}
					/>
					<Button 
					text="Empresa" 
					handleClick={this.props.sortCallback}
					name="company"
					isSelected = {this.props.sortedBy === "company"}
					/>
					<Button text="Departamento" 
					handleClick={this.props.sortCallback}
					name="department"
					isSelected = {this.props.sortedBy === "department"}
					/>
					<Button text="Data de admissão" 
					handleClick={this.props.sortCallback}
					name="admissionDate"
					isSelected = {this.props.sortedBy === "admissionDate"}
					/>
				</section>
			</div>
			
		);
		
	}
}

export default Filters;