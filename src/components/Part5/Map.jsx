import * as echarts from 'echarts';
import { MapChart } from 'echarts/charts';
import chinaJson from '../../asserts/china.json';
import { useEffect, useRef } from 'react';

echarts.use([MapChart]);

const adcodes = [
  {adcode: "110000", name: "北京市"},
  {adcode: "120000", name: "天津市"},
  {adcode: "130000", name: "河北省"},
  {adcode: "140000", name: "山西省"},
  {adcode: "150000", name: "内蒙古自治区"},
  {adcode: "210000", name: "辽宁省"},
  {adcode: "220000", name: "吉林省"},
  {adcode: "230000", name: "黑龙江省"},
  {adcode: "310000", name: "上海市"},
  {adcode: "320000", name: "江苏省"},
  {adcode: "330000", name: "浙江省"},
  {adcode: "340000", name: "安徽省"},
  {adcode: "350000", name: "福建省"},
  {adcode: "360000", name: "江西省"},
  {adcode: "370000", name: "山东省"},
  {adcode: "410000", name: "河南省"},
  {adcode: "420000", name: "湖北省"},
  {adcode: "430000", name: "湖南省"},
  {adcode: "440000", name: "广东省"},
  {adcode: "450000", name: "广西壮族自治区"},
  {adcode: "460000", name: "海南省"},
  {adcode: "500000", name: "重庆市"},
  {adcode: "510000", name: "四川省"},
  {adcode: "520000", name: "贵州省"},
  {adcode: "530000", name: "云南省"},
  {adcode: "540000", name: "西藏自治区"},
  {adcode: "610000", name: "陕西省"},
  {adcode: "620000", name: "甘肃省"},
  {adcode: "630000", name: "青海省"},
  {adcode: "640000", name: "宁夏回族自治区"},
  {adcode: "650000", name: "新疆维吾尔自治区"},
  {adcode: "710000", name: "台湾省"},
  {adcode: "810000", name: "香港特别行政区"},
  {adcode: "820000", name: "澳门特别行政区"},
]

const adcode = adcodes.reduce((prev, current) => {
  if (current.name === "内蒙古自治区" || current.name === "黑龙江省") {
    return {
      ...prev,
      [+current.adcode]: current.name.slice(0, 3),
    }
  } else {
    return {
      ...prev,
      [+current.adcode]: current.name.slice(0, 2),
    }
  }
}, {})

const chinaMapConfig = (configData) => {
  const { data, max, min } = configData;

  return {
    tooltip: {
      // 提示框
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params) {
        let { data = {} } = params;
        let { value = 0 } = data;
        return `${params.name}<br/>
                  GDP: ${value} 万亿`;
      }
    },
    visualMap: {
        // 视觉映射组件
        type: "continuous", // 连续型
        left: "right", // visualMap 组件离容器左侧的距离,值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。
        min: 0.21,        // 指定允许的最小值
        max: max,      // 指定允许的最大值,这里进行动态设置
        inRange: {     // 定义 **在选中范围中** 的视觉元素
            // 图元的颜色
            // 这里以这数组所填写的颜色点作为基准，形成一种『渐变』的色带，数据映射到这个色带上
            color: [ // 橘色效果
                "#fff",
                "#e36b2b",
                // "#f96a35",
                // "#c3380e",
                // "#942005"
            ]
          // color: [ // 蓝色效果
          //     '#e5f7ff',
          //     '#096dd9',
          // ]
        },
        text: [`最大值：${max}`, 0],  // 两端的文本,如 `['High', 'Low']`
        textStyle: {
            color: "#000" // visualMap 文字的颜色。
        }
    },
    toolbox: {
      // 工具导航
      show: false,
      left: "left",
      top: "top",
      feature: {
        // dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    dataset: {
      source: data
    },
    series: [{
      // 地图,可以是数组，多个
      label: {
        show: false, //显示省市名称
        position: [1, 100], // 相对的百分比
        fontSize: 12,
        offset: [2, 0],
        align: "left"
      },
      itemStyle: {
        areaColor: "#fff" // 地图图形颜色
      },
      roam: false,
      itemStyle: {
          normal: {
              areaColor: "#fff",
              // borderColor: "#1cccff",
              borderWidth: 1,
          },
          emphasis: {
              areaColor:"#FFBC57",   //鼠标悬停/选中颜色
              label: {
                  show: true,
                  color: "#fff",
                  // borderColor:"rgb(2,241,177)",
              },
          },
      },
      type: "map",
      map: "china",
      zoom: 1.6, // 当前视角的缩放比例
      scaleLimit: {
        max: 2,
        min: 1 // 设置默认缩放效果
      },
      top: "28%", // 距离顶部距离

      // nameMap:{
      //     '内蒙古':'NeiMengGu',
      //     '北京':'Beijing',
      // },

      nameMap: adcode,
      nameProperty: "adcode",
      // data: [
      //   { name: "内蒙古", value: 1000 },
      //   { name: "北京", value: 700 },
      //   { name: "河北", value: 30 }
      // ]
    }]
  };
};

const resData = {
  max: 12.44,
  data: [
    { name: "广东", value: 12.44 },
    { name: "江苏", value: 11.64 },
    { name: "山东", value: 8.31 },
    { name: "浙江", value: 7.35 },
    { name: "河南", value: 5.89 },
    { name: "四川", value: 5.39 },
    { name: "湖北", value: 5.00 },
    { name: "福建", value: 4.88 },
    { name: "湖南", value: 4.61 },
    { name: "上海", value: 4.32 },
    { name: "安徽", value: 4.30 },
    { name: "河北", value: 4.04 },
    { name: "北京", value: 4.03 },
    { name: "陕西", value: 2.98 },
    { name: "江西", value: 2.96 },
    { name: "重庆", value: 2.79 },
    { name: "辽宁", value: 2.76 },
    { name: "云南", value: 2.71 },
    { name: "广西", value: 2.47 },
    { name: "山西", value: 2.26 },
    { name: "内蒙古", value: 2.05 },
    { name: "贵州", value: 1.96 },
    { name: "新疆", value: 1.60 },
    { name: "天津", value: 1.57 },
    { name: "黑龙江", value: 1.49 },
    { name: "吉林", value: 1.32 },
    { name: "甘肃", value: 1.02 },
    { name: "海南", value: 0.65 },
    { name: "宁夏", value: 0.45 },
    { name: "青海", value: 0.33 },
    { name: "西藏", value: 0.21 },
  ],
};

const pieData = [
  { name: "广东省", value: [1,1,2] },
  { name: "江苏省", value: [2,2,5] },
  { name: "山东省", value: [2,2,1] },
  { name: "浙江省", value: [2,2,6] },
  { name: "河南省", value: [3,3,4] },
  { name: "四川省", value: [5,0,4] },
  { name: "湖北省", value: [2,2,2] },
  { name: "福建省", value: [3,2,3] },
  { name: "湖南省", value: [1,2,3] },
  { name: "上海市", value: [0,0,0] },
  { name: "安徽省", value: [2,1,3] },
  { name: "河北省", value: [1,3,2] },
  { name: "北京市", value: [3,4,1] },
  { name: "陕西省", value: [1,2,5] },
  { name: "江西省", value: [2,2,3] },
  { name: "重庆市", value: [1,1,4] },
  { name: "辽宁省", value: [0,4,4] },
  { name: "云南省", value: [4,1,2] },
  { name: "广西壮族自治区", value: [1,1,3] },
  { name: "山西省", value: [3,1,6] },
  { name: "内蒙古自治区", value: [1,1,3] },
  { name: "贵州省", value: [1,3,4] },
  { name: "新疆维吾尔自治区", value: [1,2,6] },
  { name: "天津市", value: [0,2,0] },
  { name: "黑龙江省", value: [0,1,1] },
  { name: "吉林省", value: [0,2,1] },
  { name: "甘肃省", value: [1,2,3] },
  { name: "海南省", value: [0,0,2] },
  { name: "宁夏回族自治区", value: [0,1,2] },
  { name: "青海省", value: [1,1,2] },
  { name: "西藏自治区", value: [1,0,3] },
]

export default function Map() {
  const ref = useRef(null);
  let mapInstance = null;

  const addPieToMap = (chart, data) => {
    var sd = [];
    for (var i = 0; i < data.length; i++) {
        var randomValue = 20;
        var radius = randomValue;
        // var geoCoord = geoCoordMap[data[i].name];
      
        let geoCoord = chinaJson.features.find((item)=>{
          return item.properties.name === data[i].name
        }).properties.center;
        if (geoCoord) {
            var vr = [];
            //饼图的数据不进行映射
            vr.push({
                name: '正式世界遗产（独有）',
                value: data[i].value[0],
                visualMap: false
            }); 
            vr.push({
                name: '正式世界遗产（与其他省份共有）',
                value: data[i].value[1],
                visualMap: false
            }); 
            vr.push({
                name: '世界预备遗产',
                value: data[i].value[2],
                visualMap: false
            }); 
            let sum = data[i].value[0] + data[i].value[1] + data[i].value[2]; 
            if (data[i].name === '青海省') {
              geoCoord[0] = '96'
            }
            var p = chart.convertToPixel({
                seriesIndex: 0
            }, geoCoord);
            sd.push({
                name: data[i].name,
                type: 'pie',
                // roseType: 'radius',
                // tooltip: {
                //     formatter: function(params) {
                //         // return params.seriesName + "<br/>" + params.name + " : " + params.value + ' 亿元';
                //         return params.total + ' 亩';
                //     }
                // },
                color: ['#FFBC57', '#F66C6C', '#802323'],
                radius: sum / 10 * 7 + '%',
                center: p,
                data: vr,
                zlevel: 4,
                zoom: 1.8,
                roam: false,
                tooltip: {
                    formatter: '{a}<br/>{b}: {c}处 ({d}%)'
                },
                itemStyle: {
                  opacity: 0.7,
                },
                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                        formatter: '{value|{c}}',
                        padding:[0,0,0,0],
                        rich: {
                            value: {
                                fontSize: 8,
                                color:'#ffffff',
                            },
                        },
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
            });
        }
    }
    //因为这个组件公用，发现配置项的series不能进行重置，所以在这里以这种方式手动重置
    const mapOption = chinaMapConfig({ data: resData.data, max: resData.max, min: 0 });
    mapOption.series = [ mapOption.series[0]]
    mapOption.series = mapOption.series.concat(sd)
    mapInstance.setOption(mapOption,true);
    return sd;
  }

  const renderMap = () => {
    const renderedMapInstance = echarts.getInstanceByDom(ref.current);
    if (renderedMapInstance) {
      mapInstance = renderedMapInstance;
    } else {
      mapInstance = echarts.init(ref.current);
    }
    mapInstance.setOption(
      chinaMapConfig({ data: resData.data, max: resData.max, min: 0 })
    );
    addPieToMap(mapInstance, pieData);
  };

  useEffect(() => {
    echarts.registerMap("china", { geoJSON: chinaJson });
    renderMap();
    
  }, []);
  
  return (
    <div>
      <div style={{ width: "100%", height: "767px" }} ref={ref}></div>
    </div>
  );
}