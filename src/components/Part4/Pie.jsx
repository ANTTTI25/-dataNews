import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: '申遗一次成功',
      value: 54,
    },
    {
      type: '申遗多次成功',
      value: 2,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
    pieStyle: ({ type }) => {
      if (type === '申遗一次成功') {
        return {
          fill: '#F0A276',
        }
      } else {
        return {
          fill: '#FFBC57',
        }
      }
    }
  };
  return <Pie {...config} />;
};

export default DemoPie