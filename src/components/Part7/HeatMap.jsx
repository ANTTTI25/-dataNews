import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Heatmap } from '@ant-design/plots';

const DemoHeatmap = () => {
  const heatMapData = [
    { name: '苏州古典园林', time: '申遗前一年', value: 471.3 },
    { name: '皖南古村落－西递、宏村', time: '申遗前一年', value: 28.7 },
    { name: '龙门石窟', time: '申遗前一年', value: 59.3 },
    { name: '青城山—都江堰', time: '申遗前一年', value: 221.2 },
    { name: '云冈石窟', time: '申遗前一年', value: 43.3 },
    { name: '殷墟', time: '申遗前一年', value: 15.6 },
    { name: '开平碉楼与村落 ', time: '申遗前一年', value: 346 },
    { name: '福建土楼', time: '申遗前一年', value: 10.264 },
    { name: '五台山', time: '申遗前一年', value: 107.4 },
    { name: '登封 “天地之中”历史古迹', time: '申遗前一年', value: 321 },
    { name: '杭州西湖文化景观', time: '申遗前一年', value: 2757.147 },
    { name: '左江花山岩文化景观', time: '申遗前一年', value: 306.613 },
    { name: '鼓浪屿：历史国际社区', time: '申遗前一年', value: 2927.156 },
    { name: '良渚古城遗址', time: '申遗前一年', value: 179824 },
    { name: '云南三江并流保护区', time: '申遗前一年', value: 148.376 },
    { name: '四川大熊猫栖息地', time: '申遗前一年', value: 500.2 },
    { name: '三清山国家公园', time: '申遗前一年', value: 43.2 },
    { name: '澄江化石遗址', time: '申遗前一年', value: 3 },
    { name: '新疆天山', time: '申遗前一年', value: 346.299 },
    { name: '中国黄（渤）海候鸟栖息地（第一期）', time: '申遗前一年', value: 33269 },
    { name: '苏州古典园林', time: '申遗成功年', value: 566.672 },
    { name: '皖南古村落－西递、宏村', time: '申遗成功年', value: 34.6 },
    { name: '龙门石窟', time: '申遗成功年', value: 85.5 },
    { name: '青城山—都江堰', time: '申遗成功年', value: 259 },
    { name: '云冈石窟', time: '申遗成功年', value: 56.09 },
    { name: '殷墟', time: '申遗成功年', value: 17.2 },
    { name: '开平碉楼与村落 ', time: '申遗成功年', value: 575.9 },
    { name: '福建土楼', time: '申遗成功年', value: 12.845 },
    { name: '五台山', time: '申遗成功年', value: 122.4 },
    { name: '登封 “天地之中”历史古迹', time: '申遗成功年', value: 349.1 },
    { name: '杭州西湖文化景观', time: '申遗成功年', value: 3063.140 },
    { name: '左江花山岩文化景观', time: '申遗成功年', value: 348.349 },
    { name: '鼓浪屿：历史国际社区', time: '申遗成功年', value: 7830.52 },
    { name: '良渚古城遗址', time: '申遗成功年', value: 208137 },
    { name: '云南三江并流保护区', time: '申遗成功年', value: 97.406 },
    { name: '四川大熊猫栖息地', time: '申遗成功年', value: 579.686 },
    { name: '三清山国家公园', time: '申遗成功年', value: 61.8 },
    { name: '澄江化石遗址', time: '申遗成功年', value: 4 },
    { name: '新疆天山', time: '申遗成功年', value: 352.3 },
    { name: '中国黄（渤）海候鸟栖息地（第一期）', time: '申遗成功年', value: 37038.4 },
    { name: '苏州古典园林', time: '申遗后一年', value: 635.025 },
    { name: '皖南古村落－西递、宏村', time: '申遗后一年', value: 39.2},
    { name: '龙门石窟', time: '申遗后一年', value: 106.406 },
    { name: '青城山—都江堰', time: '申遗后一年', value: 346.1 },
    { name: '云冈石窟', time: '申遗后一年', value: 67 },
    { name: '殷墟', time: '申遗后一年', value: 30.1 },
    { name: '开平碉楼与村落 ', time: '申遗后一年', value: 1114 },
    { name: '福建土楼', time: '申遗后一年', value: 16.410 },
    { name: '五台山', time: '申遗后一年', value: 145.8 },
    { name: '登封 “天地之中”历史古迹', time: '申遗后一年', value: 384 },
    { name: '杭州西湖文化景观', time: '申遗后一年', value: 3311.225 },
    { name: '左江花山岩文化景观', time: '申遗后一年', value: 351.8 },
    { name: '鼓浪屿：历史国际社区', time: '申遗后一年', value: 8900.32 },
    { name: '良渚古城遗址', time: '申遗后一年', value: 176000 },
    { name: '云南三江并流保护区', time: '申遗后一年', value: 92.1 },
    { name: '四川大熊猫栖息地', time: '申遗后一年', value: 736.8 },
    { name: '三清山国家公园', time: '申遗后一年', value: 76.8 },
    { name: '澄江化石遗址', time: '申遗后一年', value: 4.4 },
    { name: '新疆天山', time: '申遗后一年', value: 345.7 },
    { name: '中国黄（渤）海候鸟栖息地（第一期）', time: '申遗后一年', value: 24052.5 },
    { name: '苏州古典园林', time: '申遗后两年', value: 737.740 },
    { name: '皖南古村落－西递、宏村', time: '申遗后两年', value: 49 },
    { name: '龙门石窟', time: '申遗后两年', value: 121 },
    { name: '青城山—都江堰', time: '申遗后两年', value: 401 },
    { name: '云冈石窟', time: '申遗后两年', value: 30 },
    { name: '殷墟', time: '申遗后两年', value: 34.6 },
    { name: '开平碉楼与村落 ', time: '申遗后两年', value: 1158.9 },
    { name: '福建土楼', time: '申遗后两年', value: 22.417 },
    { name: '五台山', time: '申遗后两年', value: 172.1 },
    { name: '登封 “天地之中”历史古迹', time: '申遗后两年', value: 422.19 },
    { name: '杭州西湖文化景观', time: '申遗后两年', value: 3160.058 },
    { name: '左江花山岩文化景观', time: '申遗后两年', value: 367.1 },
    { name: '鼓浪屿：历史国际社区', time: '申遗后两年', value: 7499.11 },
    { name: '云南三江并流保护区', time: '申遗后两年', value: 182.813 },
    { name: '四川大熊猫栖息地', time: '申遗后两年', value: 472 },
    { name: '三清山国家公园', time: '申遗后两年', value: 112.2 },
    { name: '新疆天山', time: '申遗后两年', value: 312.9 },
    { name: '苏州古典园林', time: '申遗后三年', value: 708.343 },
    { name: '皖南古村落－西递、宏村', time: '申遗后三年', value: 43 },
    { name: '龙门石窟', time: '申遗后三年', value: 27 },
    { name: '青城山—都江堰', time: '申遗后三年', value: 221 },
    { name: '云冈石窟', time: '申遗后三年', value: 64.1 },
    { name: '殷墟', time: '申遗后三年', value: 50 },
    { name: '开平碉楼与村落 ', time: '申遗后三年', value: 1190.397 },
    { name: '福建土楼', time: '申遗后三年', value: 41.672 },
    { name: '五台山', time: '申遗后三年', value: 208.798 },
    { name: '登封 “天地之中”历史古迹', time: '申遗后三年', value: 436.095 },
    { name: '杭州西湖文化景观', time: '申遗后三年', value: 3261.337 },
    { name: '左江花山岩文化景观', time: '申遗后三年', value: 382.914 },
    { name: '鼓浪屿：历史国际社区', time: '申遗后三年', value: 6489.59 },
    { name: '云南三江并流保护区', time: '申遗后三年', value: 308.673 },
    { name: '四川大熊猫栖息地', time: '申遗后三年', value: 588.7 },
    { name: '三清山国家公园', time: '申遗后三年', value: 152.5 },
    { name: '澄江化石遗址', time: '申遗后三年', value: 5.2 },
    { name: '新疆天山', time: '申遗后三年', value: 317.9 },
  ]

  let data = [];

  for (let i = 0;i < 20;i++) {
    let name = heatMapData[i].name;
    const arr = heatMapData.filter(item => item.name === name);
    for (let j = 1;j < arr.length;j++) {
      arr[j].value = arr[j].value / arr[0].value;
    }
    arr[0].value = 1;
    data = [
      ...data,
      ...arr,
    ]
  }
  const arr1 = data.filter(item => item.time === '申遗前一年');
  const arr2 = data.filter(item => item.time === '申遗成功年');
  const arr3 = data.filter(item => item.time === '申遗后一年');
  const arr4 = data.filter(item => item.time === '申遗后两年');
  const arr5 = data.filter(item => item.time === '申遗后三年');
  data = [
    ...arr1,
    ...arr2,
    ...arr3,
    ...arr4,
    ...arr5,
  ];

  const config = {
    width: 650,
    height: 600,
    autoFit: false,
    data,
    xField: 'time',
    yField: 'name',
    colorField: 'value',
    color: ['#FFBC57', '#F66C6C', '#802323'],
    meta: {
      'Month of Year': {
        type: 'cat',
      },
    },
  };

  return <Heatmap {...config} />;
};

export default DemoHeatmap;
