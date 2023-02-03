import React from 'react'
import "./WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
        <div className="widget__content">
            <img src="https://i.ytimg.com/vi/SEiyRGlzytE/maxresdefault.jpg" alt='' />
            <div className="widget__contentTitle">
                <h5>Google Developer Students Club</h5>
                <p>University-based community groups powered by Google Developers</p>
            </div>
        </div>
        <div className="widget__content">
            <img src="https://pbs.twimg.com/profile_images/1565290922606137346/wnrlLEGc_400x400.jpg" alt='' />
            <div className="widget__contentTitle">
                <h5>NSS Club</h5>
                <p>The main objective was to develophealthy contacts between the students and teachers on the one hand and establishing a constructive linkage between the campus and the community on the other hand.</p>
            </div>
        </div>
        <div className="widget__content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5lSyjMe7RNEVrVbukvdv2SIJG3JD_vcvNw&usqp=CAU" alt='' />
            <div className="widget__contentTitle">
                <h5>NCC Club</h5>
                <p>The motto of NCC is ‘Unity & Discipline’ which was adopted on 23 Dec 1957.</p>
            </div>
        </div>
        <div className="widget__content">
            <img src="https://technohubbit.in/assets/images/logos/share-thumbnail.png" alt='' />
            <div className="widget__contentTitle">
                <h5>Techno Hub</h5>
                <p>The focus of the TechnoHub club primarily is to help the students gain practical as well as theoretical technical knowledge.</p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent