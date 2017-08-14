import React from 'react';
import {Thumbnail} from 'react-bootstrap';

const Result = (props) => (
    <Thumbnail href={props.url} src={props.imageUrl} alt="240x200">
        <h5 className="text-center">{props.artist}</h5>
    </Thumbnail>
);


export default Result;

