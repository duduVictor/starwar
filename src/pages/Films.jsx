import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "../App.css";

export default class Films extends React.Component{
    constructor(props){
 
  super(props);
  this.state = {
	  loading: true,
    query: "",
    isButtonActive: false,
	  films: []
  };
  
} 
token = null;
onClick = this.onClick.bind(this) 
  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };


  search = query => {
    const url = `https://swapi.co/api/films?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ films: data.results, loading: false });
        }
      });
  };

  onClick () {
    this.setState({
      isButtonActive: !this.state.isButtonActive
    })

    this.props.openPanel(this.props.buttonNumber)
  }
  componentDidMount() {
    this.search("");
  }
  componentWillUnmount() {
    clearInterval(this.search(""));
  }

  render() {
	if(this.state.loading){
        return <div>loading....</div>;
    }

    if(!this.state.films) {
        return <div>Didn't find A character</div>;
    }
   
    
    return (
    <div>
      <div className="title">
          <h1>Movies</h1>
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
                  
                  
                        {this.state.films.map(film => (
                        <p key={film.episode_id}>
                            {film.episode_id}
                        </p>
                        ))}       
                </div>
                <div> 
                        {this.state.films.map(film => (
                        <p key={film.director}>
                            {film.director}
                        </p>
                        ))}       
                </div>
                <div  onClick={() => this.addActiveClass(2)}>
                {this.state.films.map(film => (
                        <p key={film.title}>
                            {film.title}
                        </p>
                        ))}     
                </div>
            
            </form>
      </div>
      </div>
    );
    
  }
}