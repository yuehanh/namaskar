import React from 'react'
import { TaskIndexItemContainer } from './task_index_item_container'


export class TaskIndex extends React.Component {
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
        </ul>
      </div>
    )
  }
}