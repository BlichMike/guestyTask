import React from 'react';
import Node from '../node/Node';

function NodesList(props) {
    const { data } = props;

    return (
        <div>
            {Object.keys(data).map((item) => <Node key={item} data={data[item]} dataKey={item}></Node>)}
        </div>
    )
}

export default NodesList;
