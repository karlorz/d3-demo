import Header from '../components/Header';
import { Box, Typography, Button, styled } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Component = styled(Box)({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  margin: '0 10px',
  '& > div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      '& > div > p': {
          fontSize: 56,
          lineHeight: 1.25,
          letterSpacing: -1
      },
      '& > div > button': {
          width: 220,
          height: 60,
          background: 'rgb(37, 87, 167)',
          textTransform: 'none',
          fontSize: 16,
          fontWeight: 700,
          marginTop: 48
      }
  }
})

const Demo = () => {
  // Ref to the SVG element
  const svgRef = useRef(null);

  useEffect(() => {
    // Generate a random dataset with 5 values
    const data = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1);

    // Set up the D3 scales
    const xScale = d3.scaleBand().domain(data.map((d, i) => i)).range([0, 300]).padding(0.1);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([0, 150]);

    // Create the SVG container
    const svg = d3.select(svgRef.current);

    // Create and render the bars
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))
      .attr('y', (d) => 150 - yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => yScale(d))
      .attr('fill', 'blue');
  }, []); // Empty dependency array ensures the useEffect runs only once, similar to componentDidMount


  return (
    <>
    <Header />
    <Component>
        <Box>
        <div>
      <h2>Random Bar Chart</h2>
      <svg ref={svgRef} width={300} height={150}></svg>
    </div>
        </Box>
    </Component>

    </>
  );
};

export default Demo;