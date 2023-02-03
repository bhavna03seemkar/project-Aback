import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import "./AbackBox.css";

function AbackBox() {
  const user = useSelector(selectUser);
  return (
    <div className="abackBox">
        <div className="abackBox__info">
            <Avatar src = {user?.photo} />
        </div>
        <div className="abackBox__ask">
            <h4>Ask Your Question Or Link</h4>
        </div>
    </div>
  )
}

export default AbackBox