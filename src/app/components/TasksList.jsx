import React from 'react';
import {connect} from 'react-redux';
import {requestTaskCreation} from '../store/actions'
import {Link} from 'react-router-dom';


const TasksList = ({tasks, name, id, createNewTask}) => {
return(
  <div>
    <h2>{name}</h2>
    <div>
      {tasks.map(task => (
        <Link to={`/task/${task.id}`} key={task.id}>
          <div >{task.name}</div>
        </Link>
      ))}
    </div>
   <button onClick={() => createNewTask(id)}>Add new task</button>
  </div>
)};

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter(task => task.group === groupID)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log("Adding new task...", id)
      dispatch(requestTaskCreation(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)