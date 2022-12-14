import { Segmented } from "antd";
import React, { useState, useEffect } from "react";
import './index.css';
import 'antd/dist/antd.css';
import world from '../../asserts/answer-pre.png';
import pre from '../../asserts/answer-pre.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const options = [
    {value: 1, label: (<div className="selectcard-segmented-label" />)},
    {value: 2, label: (<div className="selectcard-segmented-label" />)},
    {value: 3, label: (<div className="selectcard-segmented-label" />)},
    {value: 4, label: (<div className="selectcard-segmented-label" />)},
    {value: 5, label: (<div className="selectcard-segmented-label" />)},
    {value: 6, label: (<div className="selectcard-segmented-label" />)},
    {value: 7, label: (<div className="selectcard-segmented-label" />)},
    {value: 8, label: (<div className="selectcard-segmented-label" />)},
  ];
  const InitCard = ({ value, content, onClick }) => {
    const handleClick = () => {
      onClick(value);
    }
    return (
      <div className="selectcard-initcard" key={1} onClick={handleClick} style={{
        display: current === value ? 'none' : 'block'
      }}>
        <div className="selectcard-initcard-content">
          { content }
        </div>
      </div>
    )
  }

  const ExtraCard = ({ value, content, answer }) => {
    const [rotate, setRotate] = useState(false);
    const [flag, setFlag] = useState();
    const handleClick = (ans) => {
      setRotate(true);
      if (ans === answer) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    }
    return (
      <div className={`extra-card-container ${rotate && current === value ? 'rotate-vert-center' : ''}`} style={{
          'display': value === current ? 'flex' : 'none',
      }}>
        <div className="extra-card-left" style={{
          display: value === current && rotate ? 'none' : 'flex'
        }}>
          <div className="extra-card-left-content">
            {content}
          </div>
        </div>
        <div className="extra-card-options" style={{
          display: value === current && rotate ? 'none' : 'flex'
        }}>
          <div className="extra-card-answer" onClick={() => handleClick('??????')}>
            ??????
          </div>
          <div className="extra-card-answer radius" onClick={() => handleClick('??????')}>
            ??????
          </div>
        </div>
        <div className="extra-answer-card" style={{
          display: value === current && rotate ? 'flex' : 'none',
          // backgroundImage: answer === '??????' ? "url(" + require("../../asserts/answer-pre.png") + ")" : "url(" + require("../../asserts/answer-pre.png") + ")",
        }}>
          <div className="extra-answer-card-title">
            {content}
          </div>
          <div className="extra-answer-card-content">
            {answer || '??????'}??????
          </div>
          <div className="extra-answer-card-result">

          </div>
        </div>
      </div>
    )
  }

  const [current, setCurrent] = useState(1);
  const arr = [
    {
      content: '????????????'
    },
    {
      content: '?????????'
    },
    {
      content: '???????????????'
    },
    {
      content: '?????????????????????'
    },
    {
      content: '??????'
    },
    {
      content: '????????????????????????'
    },
    {
      content: '????????????????????????'
    },
    {
      content: '????????????'
    }
  ]
  return (
    <>
      <div className="selectcard-container">
        <div className="selectcard-card-container">
          <InitCard value={1} content='????????????' onClick={(e) => setCurrent(e)} />
          <ExtraCard answer={'??????'} value={1} content='????????????' />
          <InitCard value={2} content='?????????' onClick={(e) => setCurrent(e)} />
          <ExtraCard answer={'??????'} value={2} content='?????????' />
          <InitCard value={3} content='???????????????' onClick={(e) => setCurrent(e)} />
          <ExtraCard answer={'??????'} value={3} content='???????????????' />
          <InitCard value={4} content='?????????????????????' onClick={(e) => setCurrent(e)} />
          <ExtraCard answer={'??????'} value={4} content='?????????????????????' />
          <InitCard value={5} content='??????' onClick={(e) => setCurrent(e)} />
          <ExtraCard answer={'??????'} value={5} content='??????' />
          <InitCard value={6} content='????????????????????????' onClick={(e) => setCurrent(e)} />
          <ExtraCard answer={'??????'} value={6} content='????????????????????????' />
          <InitCard value={7} content='????????????????????????' onClick={(e) => setCurrent(e)} />
          <ExtraCard answer={'??????'} value={7} content='????????????????????????' />
          <InitCard value={8} content='????????????' onClick={(e) => setCurrent(e)} />
          <ExtraCard answer={'??????'} value={8} content='????????????' />
        </div>
      </div>
      <Segmented value={current} onChange={(val) => setCurrent(val)} options={options} className="selectcard-segmented" />
    </>
  )
}