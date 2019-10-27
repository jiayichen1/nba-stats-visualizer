// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component} from 'react';
import { RadarChart } from 'react-vis';
import {Hint} from 'react-vis';

// The first 11 data elements here are to simulate a 'spider' type of radar chart -
// similar to CircularGridLines, but straight edges instead.
const DATA = [
  {
    name: 'Spider10',
    DEF_RATING: 100,
    DREB_PCT: 100,
    PCT_STL: 100,
    PCT_BLK: 100,
    DEF_WS: 100,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider9',
    DEF_RATING: 90,
    DREB_PCT: 90,
    PCT_STL: 90,
    PCT_BLK: 90,
    DEF_WS: 90,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider8',
    DEF_RATING: 80,
    DREB_PCT: 80,
    PCT_STL: 80,
    PCT_BLK: 80,
    DEF_WS: 80,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider7',
    DEF_RATING: 70,
    DREB_PCT: 70,
    PCT_STL: 70,
    PCT_BLK: 70,
    DEF_WS: 70,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider6',
    DEF_RATING: 60,
    DREB_PCT: 60,
    PCT_STL: 60,
    PCT_BLK: 60,
    DEF_WS: 60,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider5',
    DEF_RATING: 50,
    DREB_PCT: 50,
    PCT_STL: 50,
    PCT_BLK: 50,
    DEF_WS: 50,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider4',
    DEF_RATING: 40,
    DREB_PCT: 40,
    PCT_STL: 40,
    PCT_BLK: 40,
    DEF_WS: 40,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider3',
    DEF_RATING: 30,
    DREB_PCT: 30,
    PCT_STL: 30,
    PCT_BLK: 30,
    DEF_WS: 30,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider2',
    DEF_RATING: 20,
    DREB_PCT: 20,
    PCT_STL: 20,
    PCT_BLK: 20,
    DEF_WS: 20,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider1',
    DEF_RATING: 10,
    DREB_PCT: 10,
    PCT_STL: 10,
    PCT_BLK: 10,
    DEF_WS: 10,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider0',
    DEF_RATING: 0.1,
    DREB_PCT: 0.1,
    PCT_STL: 0.1,
    PCT_BLK: 0.1,
    DEF_WS: 0.1,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'percentile',
    DEF_RATING: 55,
    DREB_PCT: 84,
    PCT_STL: 74,
    PCT_BLK: 50,
    DEF_WS: 82,
    fill: '#FABABA',
    stroke: '#fababa'
  }
];

function label(dataPoint) {
  var line1 = {title: 'element', value: 'dataPoint.value'};
  return [line1];
}

var realData = {
  DEF_RATING: 'defensive rating',
  DREB_PCT: 1,
  PCT_STL: 1
}


const tipStyle = {
  display: 'flex',
  color: '#000',
  background: 'transparent',
  alignItems: 'center',
  padding: '5px'
};

export default class DefenseRadarChart extends Component {
  state = {
    hoveredCell: false
  };

  render() {
    const {hoveredCell} = this.state;

    return (
      <RadarChart
        data={DATA}
        tickFormat={t => {
          return '';
        }}
        domains={[
          {
            name: 'DEF_RATING',
            domain: [0, 100],
            tickFormat: t => {
              if (t <= 100 && t >= 0) {
                return Math.round(t);
              }
              return '';
            }
          },
          {
            name: 'DREB_PCT',
            domain: [0, 100],
            getValue: d => d.DREB_PCT
          },
          {name: 'PCT_STL', domain: [0, 100], getValue: d => d.PCT_STL},
          {name: 'PCT_BLK', domain: [0, 100], getValue: d => d.PCT_BLK},
          {name: 'DEF_WS', domain: [0, 100], getValue: d => d.DEF_WS}
        ]}
        width={600}
        height={540}
        margin={{left: 100, right: 100, top: 60, bottom: 60}}
        onValueMouseOver={v => {
          this.setState({hoveredCell: v});
        }}
        onValueMouseOut={v => this.setState({hoveredCell: false})}
        style={{
          polygons: {
            strokeWidth: 2,
            strokeOpacity: 0.5,
            fillOpacity: 0.8
          },
          labels: {
            textAnchor: 'middle'
          },
          axes: {
            line: {
              fillOpacity: 0.8,
              strokeWidth: 0.5,
              strokeOpacity: 0.8
            },
            ticks: {
              fillOpacity: 0,
              strokeOpacity: 0
            },
            text: {}
          }
        }}
        colorRange={['transparent']}
        hideInnerMostValues={false}
        renderAxesOverPolygons={true}
      >
        {hoveredCell &&
          hoveredCell.dataName === 'percentile' && (
            <Hint value={hoveredCell}>
              <div style={tipStyle}
                  align={{vertical: 'bottom', horizontal: 'right'}}
                  >
                <body>
                <p>{hoveredCell.domain}</p>
                <p>percentile : {hoveredCell.value}th </p>
                </body>
              </div>
            </Hint>
          )}
      </RadarChart>
    );
  }
}
