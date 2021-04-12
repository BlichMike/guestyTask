import React, { useState, useEffect } from 'react';

import './App.css';
import Node from './components/node/Node';
import utils from './utils';

function App() {

  const [jsonData, setJsonData] = useState({});
  const [resolvedPackage, setResolvedPackage] = useState({});
  const [showJsonData, setShowJsonData] = useState(false);
  const [showJsonResolvedData, setShowJsonResolvedData] = useState(false);

  useEffect(() => {
    const jsonFileName = './complex-package.json';
    utils.getJsonData(jsonFileName, setJsonData);
  }, []);

  useEffect(() => {
    if (Object.keys(jsonData).length > 0) {
      setResolvedPackage(utils.getResolvedPackage(jsonData))
    }
  }, [jsonData])

  return (
    <div className="App">
      <button onClick={() => {setShowJsonData(!showJsonData)}}>show json data</button>
      <button onClick={() => {setShowJsonResolvedData(!showJsonResolvedData)}}>show json resolved data</button>
      {showJsonData && <Node data={jsonData}></Node>}
      {showJsonResolvedData && <Node data={resolvedPackage}></Node>}
      
    </div>
  );
}

export default App;
