import React from 'react';
import {connect} from 'react-redux';

const TasksList = ({tasks, name, id}) => {
return(
  <div>
    <h2>{name}</h2>
    <div>
      {tasks.map(task => (
      <div key={task.id}>{task.name}</div>
      ))}
    </div>
   <button onClick={() => createNewTask(id)}></button>
  </div>
)};

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter(task => task.group === groupID)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log("Adding new task...")
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)