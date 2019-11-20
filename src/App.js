import React from 'react';
import './App.css';
import AddTaskComponent from './Component/AddTaskComonent';
import ShowComment from './Component/ShowComment';



function Logo() {
  return <div className="Logo" >
    <h2>DIARY APP</h2>
    <p>Comment with no sense</p>
  </div>
}

function Chat() {
  return <div className="Chat" > 
    <AddTaskComponent />
    <ShowComment />
  </div>
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}


function App() {
  return (

    <SplitPane
    left={
      <Logo />
    }
    right={
      <Chat />
    } />
  );
}

export default App;
