import React from "react";

import Category from "../assets/Category.svg";
import UploadIcon from "../assets/UploadIcon.svg";
import InvoiceIcon from "../assets/Invoice.svg";
import ScheduleIcon from "../assets/Schedule.svg";
import CalendarIcon from "../assets/Calendar.svg";
import NotificationIcon from "../assets/Notification.svg";
import SettingIcon from "../assets/Setting.svg";
import Icon from "../assets/Icon.svg";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="logo-section">
        <img src={Icon} alt="Base Logo" className="base-icon" />
        <h1 className="base-title">Base</h1>
      </div>
      <div className="menu-item">
        <img src={Category} alt="Invoice" />
        <span>Dashboard</span>
      </div>
      <div className="menu-item active">
        <img src={UploadIcon} alt="Upload" />
        {/* <span>Upload</span> */}
      </div>
      <div className="menu-item">
        <img src={InvoiceIcon} alt="Invoice" />
        <span>Invoice</span>
      </div>
      <div className="menu-item">
        <img src={ScheduleIcon} alt="Schedule" />
        <span>Schedule</span>
      </div>
      <div className="menu-item">
        <img src={CalendarIcon} alt="Calendar" />
        <span>Calendar</span>
      </div>
      <div className="menu-item">
        <img src={NotificationIcon} alt="Notification" />
        <span>Notification</span>
      </div>
      <div className="menu-item">
        <img src={SettingIcon} alt="Settings" />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Menu;
