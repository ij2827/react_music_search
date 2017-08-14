import React, { Component } from 'react';
import {Grid, Jumbotron, Label} from 'react-bootstrap';
import SearchFrom from './components/SearchForm';
import Results from './components/Results';

let Discogs = require('disconnect').Client;


// Load default data and discogs api key and secret
let artistJson = require('./data/bbArtistPage');
let albumJson = require('./data/bbAlbums');
let {consumer} = require('./data/discogsKey');

//ENDTESTJSON

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {searchFor: "Breakbot",
                  jsonData: artistJson,
                  members: "Thibaut Berland & Christopher Irfan Khan-Acito",
                  albums: albumJson,
                  id: 703690,
                  hasSearchError: false,
                  isLoading: true};
    this.updateData = this.updateData.bind(this);
    this.data = this.data.bind(this);
  }

  /**
   * GET data and set to state
   * @param {string} search - Name of artist
   */
  data(search){
    let client = new Discogs('MyReactApp1', {
        consumerKey: consumer.key, 
	      consumerSecret: consumer.secret
    });
    let db = client.database();
    db.search(search, {params: 'artist'}, (err, data) => {
      console.log(data);
      // render if no error message from api
      if(data.results.length !== 0 ){
        this.setState({hasSearchError: false,
                      id: data.results[0].id});
        
        db.getArtist(this.state.id, (err, data) => {
        this.setState({jsonData: data,
                      members: data.realname});

        db.getArtistReleases(this.state.id, (err, data) =>{
        this.setState({albums: data});});
        });
      } else {
        this.setState({hasSearchError: true});
      }
        
    
    });
    
  }

  /** 
   * Fetch and update artist data 
   * @param {string} searchString - The search data from the SearchForm component
   * 
  */
  updateData(searchString){
    this.setState({searchFor: searchString});
    this.data(searchString);
  }

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Grid>
            <h1>Music Search</h1>
            <p>Search for artist data.</p>
            <SearchFrom update={this.updateData}/> {/* Search Component */}
            {this.state.hasSearchError ? <Label bsStyle="danger">No data found for '{this.state.searchFor}'.</Label> : <span></span>}
          </Grid>
        </Jumbotron>
        <Results artist={this.state.jsonData} members={this.state.members} albums={this.state.albums}/>
        <Jumbotron className="footer">
          <Grid><p>Created by Ivan Jaimes</p></Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;

