import React from 'react'
import ParentNode from '../parentNode/ParentNode';
import Leaf from '../leaf/Leaf';

function Node(props) {
    const { data, dataKey } = props;
    const isParent = !!data.dependencies;
    return (
        <div className="node">
            { isParent ? (<ParentNode data={data}></ParentNode>) : <Leaf name={dataKey}></Leaf> }
        </div>
    )
}

export default Node;
