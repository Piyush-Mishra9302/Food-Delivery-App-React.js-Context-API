import { assets } from '../../assets/assets';
import './AppDownload.css';
// import React from 'react' ;

const AppDownload = () => {
  return (
    <div className='app-download' id ='app-download'>
        <p>For Better ecperience Download <br></br> Tomato App</p>
        <div className='app-download-plateforms'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload