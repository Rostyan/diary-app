import React, { Component } from 'react'

export default class ShowTaskList extends Component {

	delete() {
    this.props.delete(this.props.taskList);
  }

	render() {
		return (
			<li>
        {this.props.taskList}
        <button onClick={this.props.delete} > Delete </button>
      </li>
		)
	}
}
