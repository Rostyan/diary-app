import React, { Component } from 'react'
import ShowTaskList from './ShowTaskList'

export default class AddTaskComponent extends Component {
  constructor() {
    super()
    this.state = {
      taskList: '',
      inputValue: ''
    }
  }
  
  

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }
  
  handleAdd = () => {
    var addTask = this.state.taskList;
    var newInput = this.state.inputValue;
    addTask.push(newInput);
    localStorage.setItem('addTask', JSON.stringify(addTask));
    this.setState({ 
      taskList: addTask,
      inputValue: ''
    });
  }
  
  delete = () => {
    const deleteTask = this.state.taskList;
    deleteTask.splice(deleteTask.indexOf(deleteTask), 1);
    localStorage.setItem('deleteTask',JSON.stringify(deleteTask));
    this.setState({
      taskList: deleteTask
    });
  }
 
render() {
  var listItems = this.state.taskList.map(function(listValue){ 
      return <ShowTaskList taskList={listValue} delete={this.delete} />
        }.bind(this)); 

        console.log(this.state.taskList)
  
    return (
      <div>
        <h1>Items</h1>
        {listItems}
        <div className="inputBar">
          <input type="text" value={this.inputValue} onChange={this.updateInputValue} />
          <button onClick={this.handleAdd}>Add</button>
        </div>
      </div>
    )
  }

  componentDidMount = () => {
    const taskList = localStorage.getItem('taskList')
    if (taskList){
      const savedTask = JSON.parse(taskList)
      this.setState({ taskList: savedTask})
    }
    else {
      console.log("aaaaa")
    }
  }
}


// import React, { Component } from 'react'

// export default class AddTaskComponent extends Component {
//   constructor() {
//     super()
//     this.state = {
//       taskList: [],
//     }
//   }
  
  
//   componentDidMount = () => {
//     const taskList = localStorage.getItem('taskList')
//     if (taskList){
//       const savedTask = JSON.parse(taskList)
//       this.setState({ taskList: savedTask})
//     }
//     else {
//       console.log("aaaaa")
//     }
//   }

//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

