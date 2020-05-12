import React from 'react';
import './App.scss';
import Topbar from './components/Topbar'
import Filters from './components/Filters' 
import Contacts from './components/Contacts';

class App extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
      contacts: [],
      sortedBy: null
		};
	}

	componentDidMount() {
		fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
            contacts: result,
            contactsFull: result
          });
        },
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
  }
    
  searchByName(event) {
    let result = this.state.contactsFull.filter((contact) => 
      contact.name.toUpperCase().includes(event.target.value.toUpperCase()));
    this.setState({
      contacts: result
    });
  }

  sortCallback(event) {
    const attribute = event.currentTarget.name; 
    this.state.contacts.sort((a,b) => {
      let textA = a[attribute].toUpperCase(); // indexar objetos com []
      let textB = b[attribute].toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    this.setState({
      sortedBy: attribute   
    });
  }
  
  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters 
        sortedBy={this.state.sortedBy}
        searchCallback={this.searchByName.bind(this)}
        sortCallback={this.sortCallback.bind(this)}
        />
        <Contacts contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;