import { useEffect, useState } from 'react';

// import axios from 'axios';
import { Card } from 'antd';

import { useStyles } from 'antd-style';

import './App.css';

// interface DistanceRequest {
//   C1: string;
//   C2: string;
// }
// async function distance(C1: string, C2: string) {
//   console.log('C1: ', C1);
//   console.log('C1: ', C2);

//   const response = await axios.get(`https://www.distance.to/${C1}/${C2}`);
//   const distanceData = parseDistance(response.data);
//   console.log(response);
//   return { data: distanceData };
//   // Implement parseDistance to extract distance from response
//   // res.json({ distance });
// }

// function parseDistance(data: string): number {
//   // Implement parsing logic to extract distance from the response data
//   return parseFloat(data); // Simplified example
// }

import { HeaderComponent } from './components/Header';

function App() {
  // const [data, setdata] = useState([{ key: 'header' }, { key: 'hero' }]);

  useEffect(() => {
    console.log('loading');
    //   distance('MSC', 'VLK');
  });

  return (
    <>
      <HeaderComponent />
    </>
  );
}

export default App;
