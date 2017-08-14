import React from 'react';


const Album = (props) => (
    <div>
        <div className="album-description text-center">{props.title} - ({props.year})</div>
    </div>
);
export default Album;