import React, { Component } from 'react';
import {Table, TableHeader} from 'react-mdl';
import './user_history.css';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button'
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

// ReactChartkick.addAdapter(Chart)

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
      chartdata: {},
      reps: [],
      xvals: [],
      yvals: [],
      movement: '',
      uniquemoves: [],
      myRows: [],
      selectedMove: '',
      selectedProperty: '',
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
                    "sets": 1,
                    "date": "4/02/2018"
                  },
                  {
                      id: 2,
                      "name": "Kettle Bell Swings",
                      bodypart: "Full Body",
                      url: "http://www.google.com",
                      description: "Swing that shit",
                      //JOIN:
                      "reps": 10,
                      "weight": 30,
                      "sets": 2,
                      "date": "4/06/2018"
                    },{
                        id: 2,
                        "name": "Kettle Bell Swings",
                        bodypart: "Full Body",
                        url: "http://www.google.com",
                        description: "Swing that shit",
                        //JOIN:
                        "reps": 10,
                        "weight": 35,
                        "sets": 3,
                        "date": "4/08/2018"
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
                    },
                    {
                        id: 2,
                        "name": "Kettle Bell Swings",
                        bodypart: "Full Body",
                        url: "http://www.google.com",
                        description: "Swing that shit",
                        //JOIN:
                        "reps": 10,
                        "weight": 35,
                        "sets": 3,
                        "date": "4/12/2018"
                      }]

                }
              ]
            }
          ]
        }
      }
  componentWillMount() {
    this.getMoves()
    this.filterMoves()
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
                        newRows.push(
                         {movement: ele.name, weight: ele.weight, date: ele.date, reps: ele.reps, sets: ele.sets}
                        )
                    })
             })
      })
      this.setState({myRows: newRows})
  }


  filterMoves(){
    const unique = [...new Set(this.state.myRows.map(element=> element.movement))];
    this.setState({uniquemoves: unique});
  }

  selectMove = event => {
    this.setState({ [event.target.name]: event.target.value, selectedMove: event.target.value})
   };

   selectProperty = event => {
     this.setState({ [event.target.name]: event.target.value, selectedProperty: event.target.value })
    };

generateChartData(){
  let xvals = []
  let yvals = []
  let chartdata = {}
  console.log(this.state.myRows);
  this.state.myRows.forEach((element, index)=>
{
  console.log("selected Prop:")
  console.log();
  console.log(this.state.selectedProperty)
  console.log(this.state.selectedProperty)

  let selectedProp = this.state.selectedProperty
    console.log(selectedProp)
  if(element.movement === this.state.selectedMove && selectedProp === "reps"){
    xvals.push(element.date)
    yvals.push(element.reps)
    index = element.date
    chartdata[index] = (element.reps)
}
if(element.movement === this.state.selectedMove && selectedProp === "weight"){
  xvals.push(element.date)
  yvals.push(element.weight)
  index = element.date
  chartdata[index] = (element.weight)
}
}
)
this.setState({ xvals: xvals, yvals: yvals, chartdata: chartdata})
}


  render(){
  return(
    <div>
      <h2>Your Stats</h2>
{console.log(this.state.myRows)}
{/* {console.log(this.state.uniquemoves)} */}
      <form className="root">
       <FormControl className="dropdown">
         <Select
           value={this.state.movement}
           onChange={this.selectMove}
           input={<Input name="movement" id="movement_id" />}
         >
           <MenuItem value="">
             <em>Select Movement:</em>
           </MenuItem>
           {this.state.uniquemoves.map((element)=>{
             return(
              <MenuItem value={element}> {element}</MenuItem>
             )
           })}
         </Select>
         <FormHelperText>Movement</FormHelperText>
         </FormControl>
         <FormControl> <div id="blankspace"></div>   </FormControl>

 <FormControl className="dropdown">
  <Select
    value={this.state.age}
    onChange={this.selectProperty}
    displayEmpty
    name="age"
  
  >
    <MenuItem value="">
      <em>All</em>
    </MenuItem>
    <MenuItem value={"reps"}>Reps</MenuItem>
    <MenuItem value={'weight'}>Weight</MenuItem>
  </Select>
  <FormHelperText>Property</FormHelperText>
</FormControl>
     <FormControl><div id="blankspace"></div> </FormControl>
<Button variant="contained" color="primary" onClick={this.generateChartData.bind(this)}>
       Go!
     </Button>

  {/* this.generateChartData() */}








</form>


{/* {let dataArr = this.state.xvals.map((element)=>{
  rr
} )  } */}
<div id="chartbox">
{/* <LineChart id="chart" width="400px" height="200px" data={{"2017-05-13": 2, "2017-05-14": 5}} />


{console.log(this.state.xvals[0])}
{console.log(this.state.yvals[0])} */}

 <LineChart id="chart" width="400px" height="200px" data={ this.state.chartdata }   />


</div>
                   {/* <LineChart
                        hideXLabel={true}
                        pointRadius={2}
                        hideLines={true}
                        ticks={10}
                        // isDate={true}
                        // onPointHover={(text) => console.log(text)}
                        hideYLabel={true}
                       width={600}
                       height={200}
                       data={data}
                   /> <br/> */}

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


export default withStyles(styles)(UserHistory);
