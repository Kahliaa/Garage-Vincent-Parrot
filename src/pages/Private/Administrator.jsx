import React from "react";
import { FaCar, FaWrench, FaShieldAlt } from "react-icons/fa";
import { TbClockHour7 } from "react-icons/tb";

import '../../styles/Administrator.css'
import PopUpMessages from "../../components/PopUp/PopUpMessages";
import PopUpCar from "../../components/PopUp/PopUpCar";
import PopUpHours from "../../components/PopUp/PopUpHours";
import PopUpModeration from "../../components/PopUp/PopUpModeration";
import PopUpServices from "../../components/PopUp/PopUpServices";

export default function Administrator() {

  return (
    <div className="administrator-container">
      <p className="administrator-title">Tableau de bord :</p>
      <div className="administrator-option">
        <div className="option-container">
            <FaCar size={40}/>
            <PopUpCar />
        </div>

        <div className="option-container">
            <TbClockHour7 size={40}/>
            <PopUpHours />
        </div>

        <div className="option-container">
            <FaWrench size={40}/>
            <PopUpServices />
        </div>

        <div className="option-container">
            <FaShieldAlt size={40}/>
            <PopUpModeration />
        </div>
      </div>
      <div className="administrator-container-left">
        <PopUpMessages />
      </div>
    </div>
  )
}
