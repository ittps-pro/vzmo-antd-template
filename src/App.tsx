import { useEffect, useState } from "react";

// import axios from 'axios';
import { Card, Divider, Drawer, List, Space, Table } from "antd";

// import

import { useStyles } from "antd-style";

import "./App.css";

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

// import { HeaderComponent } from "./components/Header";
import { TableOutlined, ProductFilled } from "@ant-design/icons";

function App() {
  // const [data, setdata] = useState([{ key: 'header' }, { key: 'hero' }]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("loading");
    // let r = new TimeRanges
    setOpen(true);

    //   distance('MSC', 'VLK');
  });

  return (
    <>
      <Drawer title={"Product"} open={open}></Drawer>

      <Card title={"HTB 350"}>
        <img height={300} src="/public/htb-1.png" />
      </Card>

      <TableOutlined />
      <Table columns={[{ label: "key" }]}></Table>
    </>
  );
}

export default App;
