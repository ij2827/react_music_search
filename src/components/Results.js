import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Result from './Result';
import Album from './Album';


// Main Results page 
const Results = (props) => (
    <div className="result-container">
    <Grid> 
        <h2>Result</h2>
        <Row>
            <Col xs={6} sm={3}> 
                <Result artist={props.artist.name} url={props.artist.uri} target="__blank" imageUrl={props.artist.images[0].resource_url} />
            </Col>

            <Col xs={4} sm={4}>
                <h3>Name <small>{props.artist.name}</small></h3>
            </Col>

            <Col xs={4} sm={4}>
                <h3>Member(s) <small>{props.members || props.artist.members.map((name, i) => <p> {name.name} </p> )}</small></h3>
            </Col>
            
            <Col xs={12} sm={12}>
                <h3>About <small>{props.artist.profile}</small></h3>
            </Col>
            <Col xs={12} sm={12}>
                <h3>Albums</h3>
                <Grid>
                    <Row>
                        {props.albums && props.albums.releases.reverse().map((album, i) => (
                            <Col xs={6} md={3} key={i}> 
                                <Album role={album.role} id={album.id} src={album.resource_url} title={album.title} year={album.year}/> 
                            </Col>
                        ))}
                    </Row>
                </Grid>
                
            </Col>
        </Row>     
    </Grid>
    
    </div>
);


export default Results;