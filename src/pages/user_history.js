import React, { Component } from 'react';
import {Table, TableHeader } from 'react-mdl';
import './user_history.css';

class UserHistory extends Component {
  render(){
    return(
      <div>
        <h2>User History</h2>
        <div className="table">

                <Table
                    sortable
                    shadow={50}
                    rows={  this.props.history.map((element, index) =>{
                      console.log(element);
                          return (
                            {date: element.created_at.slice(0,10), name:  element.workout_name, sets:  element.set, reps: element.rep, weight: element.weight   }
                          )
                      }) }


                >
                  <TableHeader
              numeric
              name="date"
              tooltip="Sort by Date"
        > Date
        </TableHeader>
        <TableHeader
           name="name"
           numeric
           tooltip="Workout Name"
       >
           Workout Name
       </TableHeader>
       <TableHeader
          numeric
          name="sets"
          tooltip="Sets"
      >Sets</TableHeader>
      <TableHeader
         numeric
         name="reps"
         tooltip="Reps"
     >Reps</TableHeader>
     <TableHeader
        numeric
        name="weight"
        tooltip="Weight"
    >Weight</TableHeader>
                {/* { element.created_at.slice(0,10) } { element.workout_name } { element.set } { element.rep }, { element.weight }, */}

              </Table>




    </div>
  </div>
    )
  }




}


export default UserHistory;
