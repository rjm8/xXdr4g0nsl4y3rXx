import React, { Component } from 'react'
import "./App.css"
import Ch1 from './Ch1'
import Ch2 from './Ch2'
import * as d3 from 'd3'
import tips from './tips.csv'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data:[]}
  }

  componentDidMount() {
    var self = this
    d3.csv(tips, function(d){
      return {
        tip:parseFloat(d.tip),
        total_bill:parseFloat(d.total_bill),
        day:d.day
      }
    }).then(function(csv_data){
      self.setState({data:csv_data})
    })
    .catch(function(err){
      console.log(err)
    })
  }

  render() {
    return (
      <div className='parent'>
        <div className='child1'><Ch1 data1={this.state.data} /></div>
        <div className='child2'><Ch2 data2={this.state.data} /></div>
      </div>
    );
  }
}

export default App