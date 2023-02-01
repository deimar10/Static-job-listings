import React, { useEffect, useState } from 'react';
import { JobInterface } from './Interface/interface';
import JobOffers from './components/jobOffers';
import Data from './data.json';

function App() {

  const [jobData, setJobData] = useState<JobInterface[]>();

  useEffect(() => {
    setJobData(Data as JobInterface[])
  }, []);

  console.log(jobData)

  return (
    <div className="App">
      <div className='image-container'>
      </div>
      <div className='job-offers-container'>
        <JobOffers />
      </div>
    </div>
  );
}

export default App;
