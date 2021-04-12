import React from 'react';
import {connect} from 'react-redux';
import TasksList from './TasksList'

const Dashboard = ({groups}) => (
    <>
      <h2>Dashboard</h2>
      {groups.map(group => (
        <div key={group.id}>
          <TasksList id={group.id} name={group.name}/>
        </div>
      ))} 
    </>
  );

const mapStateToProps = (state) => {
  return {
    groups: state.groups
  }
}

export default connect(mapStateToProps)(Dashboard)