import React from 'react';
import Abackheader from './Abackheader';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';
import "./css/Aback.css";

function Aback() {
  return (
    <div className='aback'>
      <Abackheader />
      <div className='aback__contents'>
        <div className='aback__content'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
        </div>
        
        
        );
}

export default Aback