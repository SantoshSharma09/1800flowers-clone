import React from "react";

import {Box} from "@chakra-ui/react"
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./styles/graph.css";

const Graph = () => {

  const data = [
    {
      name: 'BestSeller',
      instock: 1800,
      priceRange: 2400,
      amt: 400,
    },
    {
      name: 'Anniversary',
      instock: 3000,
      priceRange: 1598,
      amt: 210,
    },
    {
      name: 'Cake',
      instock: 2000,
      priceRange: 4000,
      amt: 290,
    },
    {
      name: 'Tulip',
      instock:2780,
      priceRange: 3908,
      amt: 700,
    },
  
    {
      name: 'Sympathy',
      instock: 2390,
      priceRange: 3800,
      amt: 500,
    },
    {
      name: 'All Valentine',
    instock: 3490,
      priceRange: 5800,
      amt: 100,
    },
    {
      name: 'Dogs',
      instock: 3490,
      priceRange: 5000,
      amt: 200,
    }
  ];
  return (
    
    <Box id="boxes">
        <ResponsiveContainer width={"100%"} height="100%">
       <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="instock" stackId="a" fill="#8884d8" />
          <Bar dataKey="priceRange"  stackId="a" fill="#ef5b7c" />
        </BarChart>
        </ResponsiveContainer>
    </Box>
  );
};

export default Graph;


