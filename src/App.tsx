import React, { useEffect, useState } from 'react';
import { JobInterface } from './Interface/interface';
import Home from './pages/Home';
import Data from './data.json';

function App() {

  const [jobData, setJobData] = useState<JobInterface[]>();

  useEffect(() => {
    setJobData(Data as JobInterface[])
  }, []);

  return (
    <div className="App">
      <Home jobData={jobData} />
    </div>
  );
}

export default App;
