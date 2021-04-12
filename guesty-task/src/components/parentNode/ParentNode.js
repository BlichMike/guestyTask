import React, { useState, useEffect } from 'react';
import Node from '../node/Node';
import NodesList from '../nodesList/NodesList'
import './ParentNode.css';

function ParentNode(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { data } = props;
    const isList = !!data.dependencies;
    const renderChildren = () => {
        return isList ? <NodesList data={data.dependencies}></NodesList> : <Node data={data}></Node>
    };
    return (
        <div className='parentNode'>
            <span>
                {data.name} <span onClick={() => {setIsOpen(!isOpen)}}> {isOpen ? <i className="arrow down"></i> : <i className="arrow right"></i>}</span>
            </span>
            {isOpen && renderChildren()}
        </div>
    )
}

export default ParentNode;
