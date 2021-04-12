import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <div>
    <Link to="/dashboard">
      <h1>Dashboard</h1>
    </Link>
  </div>
);
const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(Navigation);