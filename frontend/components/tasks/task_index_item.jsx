import React from 'react';
import ContentEditable from 'react-contenteditable'
export class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: props.task, transition: "" }
    this.handleBlur = this.handleBlur.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this)
  }

  handleToggleComplete(e) {
    e.stopPropagation()
    const taskNow = this.state.task
    taskNow.completed = !taskNow.completed
    if (taskNow.completed) {
      this.setState({ task: taskNow })
      setTimeout(() => {
        this.setState({ transition: "rainbow-in" })
      }, 250)

      setTimeout(() => {
        this.setState({ transition: "" })
      }, 1200);
      this.props.updateTask(this.state.task)
    } else {
      this.setState({ task: taskNow })
      this.props.updateTask(this.state.task)
    }
  }


  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    };
  }

  handleBlur() {
    const info = Object.assign({}, this.state);
    this.props.updateTask(info)
  }

  render() {


    const status = this.state.task.completed ? "completed" : ""
    return (
      <div className={`task-row ${this.state.transition}`}>
        <i className={`fas fa-check ${status}`} onClick={this.handleToggleComplete}></i>
        <ContentEditable
          onChange={this.update('name')}
          onBlur={this.handleBlur}
          html={this.state.task.name} />
      </div>
    )
  }
}