import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const data = [
    {
      type: '推荐列入',
      value: 42,
    },
    {
      type: '补充材料',
      value: 6,
    },
    {
      type: '申报复合遗产认可文化价值',
      value: 3,
    },
    {
      type: '推迟审议',
      value: 2,
    },
    {
      type: '发还待议',
      value: 3,
    },
  ];
  const brandColor = '#5B8FF9';
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '推荐列入') {
        return '#FFBC57';
      } else if (type === '补充材料') {
        return '#F66C6C';
      } else if (type === '申报复合遗产认可文化价值') {
        return '#F0A276'
      } else if (type === '推迟审议') {
        return '#487E7B'
      } else if (type === '发还待议') {
        return '#802323';
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;