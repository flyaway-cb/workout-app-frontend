import React, { Component } from 'react';
import {Table, TableHeader } from 'react-mdl';
import './user_history.css';
import LineChart from 'react-linechart';

class UserHistory extends Component {
  render(){
    const data = [
        {
            id: "My Stats",
            color: "grey",
            points: this.props.history.map((element, index) =>{
                  return (
                    {x: element.created_at.slice(0,10), y: element.weight }
                  )
              })

            // points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}]
        }
    ];
    return(
      <div>
        <h2>Your Stats</h2>
                   <LineChart
                        hideXLabel={true}
                        pointRadius={2}
                        hideLines={true}
                        ticks={10}
                        isDate={true}
                        // onPointHover={(text) => console.log(text)}
                        hideYLabel={true}
                       width={600}
                       height={200}
                       data={data}
                   /> <br/>

        <div className="table">
          <Table
            sortable
            shadow={50}
            rows={  this.props.history.map((element, index) =>{
                  return (
                    {date: element.created_at.slice(0,10), movement: element.movement_id, name:  element.workout_name, sets:  element.set, reps: element.rep, weight: element.weight   }
                  )
              })}
          >
            <TableHeader  numeric  name="date"  tooltip="Sort by Date"> Date </TableHeader>
            <TableHeader
              name="movement"
              numeric
              tooltip="Start a Movement"
            >
             Movement Name
            </TableHeader>
            <TableHeader
              name="name"
              numeric
              tooltip="Workout Name"
            >
             Workout Name
            </TableHeader>
            <TableHeader
              sortFn={ (a, b, isAsc) => (isAsc ? (b-a):(a-b)) }
              name="sets"
              tooltip="Sets"
            >Sets</TableHeader>
            <TableHeader
              sortFn={ (a, b, isAsc) => (isAsc ? (b-a):(a-b)) }
              name="reps"
              tooltip="Steady Reppin'"
            >Reps</TableHeader>
            <TableHeader
              sortFn={ (a, b, isAsc) => (isAsc ? (b-a):(a-b)) }
              name="weight"
              tooltip="Get Beefy"
            >Weight</TableHeader>
          </Table>




    </div>
  </div>
    )
  }




}


export default UserHistory;
