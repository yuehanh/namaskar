import React from 'react'
import { TaskIndexItemContainer } from './task_index_item_container'


export class TaskIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.createTask({ name: "New Task", project_id: this.props.projectId })
  }
  render() {
    const taskIndexItems = this.props.tasks.map(
      (task) => (
        <li key={task.id}>
          <TaskIndexItemContainer task={task} projectId={this.props.projectId} />
        </li>
      )
    )
    console.log("alpha")
    return (
      <div className="task-index">
        <ul className="task-index-items">
          {taskIndexItems}
          <li
            className="task-create-item clickable" onClick={this.handleClick}
          >
          <div className="create-task-name">
              Create Task
          </div>
          <i className="fas fa-plus clickable"></i>
          </li>
        </ul>
      </div>
    )
  }
}