import React, { useState } from "react";
import "./settingsPage.css";


export const SettingsPage = ({ toggleDarkMode, onLogout }) => {

  

  return (
    <div className="settings-container">
    <h2>Settings</h2>

    <div className="settings-option">
      <label htmlFor="darkModeToggle" className="settings-label">
        Dark Mode:
      </label>
      <input
        type="checkbox"
        id="darkModeToggle"
        onChange={toggleDarkMode}
      />
    </div>

      <div className="settings-option">
        <button className="edit-profile-button">Edit Profile</button>
      </div>

      <div className="settings-option">
        <button className="change-password-button">Change Password</button>
      </div>

      <div className="settings-option">
        <label htmlFor="notifications" className="settings-label">
          Email Notifications:
        </label>
        <select id="notifications" className="notifications-select">
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>

      <div className="settings-option">
        <button className="delete-account-button">Delete Account</button>
      </div>

      <div className="settings-option">
        <button className="logout-button" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};
  
