import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { AssignmentTurnedInOutlined, ExpandMore, FeaturedPlayListOutlined, NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons';
import CloseIcon from "@material-ui/icons/Close"
import "./css/Abackheader.css";
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import { Avatar, Button, Input } from '@material-ui/core';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { logout, selectUser } from '../feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';


function Abackheader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const[question, setQuestion] = useState("");
  const Close = (<CloseIcon />);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if(question != "") {

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      const body = {
        questionName: question,
        questionUrl: inputUrl,
      }
      await axios.post('/api/questions',body, config).then((res) => {
        console.log(res.data);
        alert(res.data.message);
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e)
        alert('Error in adding question')
      })
    }
  }

  const handleLogout = () => {
    if(window.confirm('Are you sure to logout ?')) {
      signOut(auth).then(() => {
        dispatch(logout())
        console.log("Logged out");
      })
      .catch(() => {
        console.log("error in loging out")
      })
    }
  }
  
  return (
    <div className="aHeader">
        <div className="aHeader-content">
            <div className="qHeader__logo">
                <img
                  src = "./images/aback_logo.png"
                  alt = "logo" />
            </div>

                <div className="aHeader__icons">
                  <div className="aHeader__icon">
                    <HomeIcon />
                  </div>
                  <div className="aHeader__icon">
                    <FeaturedPlayListOutlined />
                  </div>
                  <div className="aHeader__icon">
                    <AssignmentTurnedInOutlined />
                  </div>
                  <div className="aHeader__icon">
                    <PeopleAltOutlined />
                  </div>
                  <div className="aHeader__icon">
                    <NotificationsOutlined />
                  </div>
                </div>

                <div className='aHeader__input'>
                  <Search />
                  <input type="text" placeholder="Search question" />
                </div>

                  <div className='aHeader__placeholder'>
                    <span onClick = {handleLogout}>
                      <Avatar src={user?.photo} />
                    </span>
                    
                  </div>

                <Button onClick={() => setIsModalOpen(true)}> ADD QUESTION </Button>
                <Modal open={isModalOpen} closeIcon = {Close} onClose = {() => setIsModalOpen(false)}
                closeOnEsc
                center
                closeOverlayClick={false}
                styles={{
                  overlay: {
                    height: "auto",
                  }
                }}
                >
                  <div className="modal__title">
                    <h5>Ask Question</h5>
                    <h5> Share Link</h5>
                  </div>
                  <div className="modal__info">
                    <Avatar className="avatar" />
                    <div className="modal__scope">
                      <PeopleAltOutlined />
                      <p>Public</p>
                      <ExpandMore />
                    </div>
                  </div>
                  <div className="modal__Field">
                    <Input
                      value = {question}
                      onChange = {(e) => setQuestion(e.target.value)}
                      type="text"
                      placeholder="Start your question with 'What', 'How', 'Why', etc." />
                    <div styles={{
                      display: "flex",
                      flexDirection: "column",
                    }}>
                      <Input
                       type="text"
                       value={inputUrl}
                       onChange = {(e) => setInputUrl(e.target.value)}
                       style={{
                        display: "flex",
                        margin: "5px 0px",
                        border: "1px solid lightgray",
                        padding: "10px",
                        outline: "2px solid black",
                       }}
                       placeholder = "Optional: include a link" />
                       {inputUrl !== "" && (
                       <img
                       style = {{
                        height: "40vh",
                        objectFit: "contain",
                       }}
                       src = {inputUrl} alt =  "display" />)}
                    </div>
                  </div>
                  <div className="modal__buttons">
                    <button className="cancle" onClick = {()=> setIsModalOpen(false)}>
                      Cancel
                    </button>
                    <button onClick={handleSubmit} type="submit" className="add">
                      Add Question
                    </button>
                  </div>
                </Modal>
                  
        </div>
    </div>
  )
}

export default Abackheader