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
    OFF_RATING: 100,
    OREB_PCT: 100,
    AST_PCT: 100,
    AST_TO: 100,
    USG_PCT: 100,
    TS_PCT: 100,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider9',
    OFF_RATING: 90,
    OREB_PCT: 90,
    AST_PCT: 90,
    AST_TO: 90,
    USG_PCT: 90,
    TS_PCT: 90,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider8',
    OFF_RATING: 80,
    OREB_PCT: 80,
    AST_PCT: 80,
    AST_TO: 80,
    USG_PCT: 80,
    TS_PCT: 80,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider7',
    OFF_RATING: 70,
    OREB_PCT: 70,
    AST_PCT: 70,
    AST_TO: 70,
    USG_PCT: 70,
    TS_PCT: 70,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider6',
    OFF_RATING: 60,
    OREB_PCT: 60,
    AST_PCT: 60,
    AST_TO: 60,
    USG_PCT: 60,
    TS_PCT: 60,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider5',
    OFF_RATING: 50,
    OREB_PCT: 50,
    AST_PCT: 50,
    AST_TO: 50,
    USG_PCT: 50,
    TS_PCT: 50,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider4',
    OFF_RATING: 40,
    OREB_PCT: 40,
    AST_PCT: 40,
    AST_TO: 40,
    USG_PCT: 40,
    TS_PCT: 40,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider3',
    OFF_RATING: 30,
    OREB_PCT: 30,
    AST_PCT: 30,
    AST_TO: 30,
    USG_PCT: 30,
    TS_PCT: 30,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider2',
    OFF_RATING: 20,
    OREB_PCT: 20,
    AST_PCT: 20,
    AST_TO: 20,
    USG_PCT: 20,
    TS_PCT: 20,
    fill: 'white',
    stroke: '#cccccc'
  },
  {
    name: 'Spider1',
    OFF_RATING: 10,
    OREB_PCT: 10,
    AST_PCT: 10,
    AST_TO: 10,
    USG_PCT: 10,
    TS_PCT: 10,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'Spider0',
    OFF_RATING: 0.1,
    OREB_PCT: 0.1,
    AST_PCT: 0.1,
    AST_TO: 0.1,
    USG_PCT: 0.1,
    TS_PCT: 0.1,
    fill: 'f8f8f8',
    stroke: '#cccccc'
  },
  {
    name: 'percentile',
    OFF_RATING: 55,
    OREB_PCT: 67,
    AST_PCT: 69,
    AST_TO: 59,
    USG_PCT: 74,
    TS_PCT: 45,
    fill: '#7BAAEF',
    stroke: '#7BAAEF'
  }
];

const abbrevToDescirption = {
  OFF_RATING: "Offensive Rating\nA combined score of player's individual offense based on points produced and total possessions.",
  OREB_PCT: "Offensive Rebound Percentage\nAn estimate of the percentage of available offensive rebounds a player grabbed while he was on the floor.",
  AST_PCT: "Assist Percentage\nAn estimate of the percentage of teammate field goals a player assisted while he was on the floor.",
  AST_TO: "Assist to Turnover Ratio\nThe ratio of assists made per turnover.",
  USG_PCT: "Usage Percentage\nAn estimate of the percentage of team plays used by a player while he was on the floor.",
  TS_PCT: "True Shooting Percentage\nA measure of shooting efficiency that takes into account 2-point field goals, 3-point field goals, and free throws."
}

const tipStyle = {
  display: 'flex',
  color: '#000',
  background: 'transparent',
  alignItems: 'center',
  padding: '5px'
};

export default class OffenseRadarChart extends Component {
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
            name: 'OFF_RATING',
            domain: [0, 100],
            tickFormat: t => {
              if (t <= 100 && t >= 0) {
                return Math.round(t);
              }
              return '';
            }
          },
          {
            name: 'OREB_PCT',
            domain: [0, 100],
            getValue: d => d.OREB_PCT
          },
          {name: 'AST_PCT', domain: [0, 100], getValue: d => d.AST_PCT},
          {name: 'AST_TO', domain: [0, 100], getValue: d => d.AST_TO},
          {name: 'USG_PCT', domain: [0, 100], getValue: d => d.USG_PCT},
          {name: 'TS_PCT', domain: [0, 100], getValue: d => d.TS_PCT}
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
                <p>{abbrevToDescirption.OFF_RATING}</p>
                <p>Percentile: {hoveredCell.value}th </p>
                </body>
              </div>
            </Hint>
          )}
      </RadarChart>
    );
  }
}
