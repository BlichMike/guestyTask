import React from 'react'
import './Leaf.css';

function Leaf(props) {
    const { name } = props;
    return (
        <div className="leaf">
            {name}
        </div>
    )
}

export default Leaf;
