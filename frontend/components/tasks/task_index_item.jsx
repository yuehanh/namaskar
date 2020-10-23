import React from 'react';
import ContentEditable from 'react-contenteditable'
export class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.task
    this.handleBlur = this.handleBlur.bind(this);
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

    return (
      <div className="task-row">
        <ContentEditable
          onChange={this.update('name')}
          onBlur={this.handleBlur}
          html={this.state.name} />
      </div>
    )
  }
}