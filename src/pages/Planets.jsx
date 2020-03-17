import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "../App.css";

export default class Planets extends React.Component{
    constructor(props){
 
  super(props);
  this.state = {
	  loading: true,
    query: "",
    showModal: false,
	  planets: []
  };
  
    
} 
token = null;

handleOpenModal = this.handleOpenModal.bind(this);
handleCloseModal = this.handleCloseModal.bind(this);
  
handleOpenModal () {
  this.setState({ showModal: true });
}

handleCloseModal () {
  this.setState({ showModal: false });
}

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };


  search = query => {
    const url = `https://swapi.co/api/planets?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ planets: data.results, loading: false });
        }
      });
  };

  componentDidMount() {
    this.search("");
  }
  componentWillUnmount() {
    clearInterval(this.search(""));
  }


  toggleVisibility(){
    this.setState({
    visibility: false
    })
    }

  render() {
	if(this.state.loading){
        return <div>loading....</div>;
    }

    if(!this.state.planets) {
        return <div>Didn't find A character</div>;
    }
   
    
    return (
    <div>
      <div className="title">
          <h1>Planets</h1>
      </div>
        <div>
            <form>
                <div>
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search..."
                        onChange={this.onChange}
                    />
                    </div>
                <div> 
                        {this.state.planets.map(planet => (
                        <p key={planet.name}>
                            {planet.name}
                        </p>
                        
                        
                    
                        ))}       
                </div>
            </form>
      </div>
      </div>
    );
    
  }
}