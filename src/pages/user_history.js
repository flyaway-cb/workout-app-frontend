import React, { Component } from 'react';
import {Table, TableHeader} from 'react-mdl';
import './user_history.css';
import LineChart from 'react-linechart';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';

const BASE = 'http://localhost:3000'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class UserHistory extends Component {
  constructor(props) {
    super(props)
    this.state={
      movement: '',
      myRows: [],
      history: [
        {
          "id": 1,
          "user_id": 1,
          "created_at": "2018-04-20T20:53:38.103Z",
          "workout": [
            {
              id: 1,
              name: "Booty Blaster",
              difficulty: "moderate",
              duration: "1 hour",
              "movement":[
                {
                  id: 1,
                  "name": "Pull-Up",
                  bodypart: "back",
                  url: "http://www.google.com",
                  description: "pull yourself up",
                  //JOIN:
                  "reps": 8,
                  "weight": "N/A",
                  "sets": 2,
                  "date": "4/01/2018"
                },  {
                    id: 2,
                    "name": "Kettle Bell Swings",
                    bodypart: "Full Body",
                    url: "http://www.google.com",
                    description: "Swing that shit",
                    //JOIN:
                    "reps": 10,
                    "weight": 25,
                    "sets": 3,
                    "date": "4/02/2018"
                  }],

              }]
        } ,
            {
              "id": 2,
              "user_id": 1,
              created_at: "2018-04-22T20:53:38.103Z",
              "workout": [
                {
                  id: 2,
                  name: "Booty Blaster",
                  difficulty: "moderate",
                  duration: "1 hour",
                  "movement":[
                    {
                      id: 2,
                      "name": "Push-Up",
                      bodypart: "chest",
                      url: "http://www.ebay.com",
                      description: "push yourself up",
                      //JOIN:
                      "reps": 30,
                      "weight": "N/A",
                      "sets": 5,
                      "date": "4/20/2018"
                    },
                    {
                      id: 1,
                      "name": "Pull-Up",
                      bodypart: "back",
                      url: "http://www.google.com",
                      description: "pull yourself up",
                      //JOIN:
                      "reps": 15,
                      "weight": "N/A",
                      "sets": 2,
                      "date": "4/22/2018"
                    }]

                }
              ]
            }
          ]
        }
      }
  componentWillMount() {
    this.getMoves()
  }
  //   return fetch(BASE + '/user_histories')
  //     .then((resp) => {
  //       return resp.json()
  //     })
  //     .then(APIinfo => {
  //       this.setState({
  //         history: APIinfo
  //         })
  //       console.log(this.state.history);
  //     })
  // }

  getMoves(){
    let newRows = this.state.myRows
    this.state.history.forEach((element, index) =>{
               element.workout.forEach((e,i)=> {
                 e.movement.forEach((ele,ind)=> {
                      console.log(ele.name)
                        newRows.push(
                         {movement: ele.name, weight: ele.weight, date: ele.date, reps: ele.reps, sets: ele.sets}
                        )
                    })
             })
      })
      this.setState({myRows: newRows})
      console.log(this.state.myRows);
  }

  handleChange = event => {
     this.setState({ [event.target.name]: event.target.value });
   };

  render(){
    const { classes } = this.props

    const data = [
        {
            id: "My Stats",
            color: "grey",
            points:

            this.state.history.map((element, index) =>{
                  return (
                    {x: element.created_at.slice(0,10), y: element.weight }
                  )
              })

            // points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}]
        }
    ];


//   this.state.history.map((element, index) =>{
//           return (
//              element.workout.map((e,i)=> {
//                return(
//                 this.state.rows =  e.movement.map((ele,ind)=> {
//                     console.log(ele.name)
//                       return({
//                         movement: ele.name
//
//                       })
//                   })
//               )
//            })
//         )
//     })
// console.log(this.state.rows);

    return(
      <div>
        <h2>Your Stats</h2>
{console.log(this.state.myRows[0].movement)}

 <form className="root" autoComplete="off">
       <FormControl className="dropdown">
         <InputLabel htmlFor="movement_id">Movement</InputLabel>
         <Select
           value={this.state.movement}
           onChange={this.handleChange}
           input={<Input name="movement" id="movement_id" />}
         >
           <MenuItem value="">
             <em>Select Movement:</em>
           </MenuItem>
           {this.state.myRows.map((element)=>{
             return(
              <MenuItem value={element.movement}> {element.movement}</MenuItem>
             )
           })}
         </Select>
         <FormHelperText>Select your exercise movement above</FormHelperText>
            </FormControl>
          </form>
<br/><br/><br/><br/><br/><br/>







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
            rows={  this.state.myRows }
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
              sortFn={ (a, b, isAsc) => (isAsc ? (b-a):(a-b)) }
              name="weight"
              tooltip="Get Beefy"
            >Weight</TableHeader>
            <TableHeader
              sortFn={ (a, b, isAsc) => (isAsc ? (b-a):(a-b)) }
              name="reps"
              tooltip="Steady Reppin'"
            >Max Reps</TableHeader>
            <TableHeader
              sortFn={ (a, b, isAsc) => (isAsc ? (b-a):(a-b)) }
              name="sets"
              tooltip="Sets"
            >Set Number</TableHeader>

          </Table>



    </div>
  </div>
    )
  }




}


export default UserHistory;
