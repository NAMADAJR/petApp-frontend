import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdSettings } from "react-icons/io";
import { PiNotificationFill } from "react-icons/pi";
import '../Navbar.css';

export function Navbar() {
  const [profileImage, setProfileImage] = useState(null);

  // Fetch user profile to get the image
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://petapp-backend-abg7.onrender.com/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.image) {
            // Prepend the backend URL if image is present
            const imageUrl = `https://petapp-backend-abg7.onrender.com/${data.image}`;
            console.log("Image URL:", imageUrl); // Check the image URL in console
            setProfileImage(imageUrl); // Set the full image URL if available
          } else {
            setProfileImage(null); // Set to null if no image is found
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <div className='navbar-main'>
      <div className='navbar'>
        <NavLink to='/overview'>
          <img src='/petlogo.png' alt='' className='w-[200px] h-[]' />
        </NavLink>
        <div className='flex'>
          <div className='px-[20px]'>
            <NavLink
              to='/overview'
              className={({ isActive, isPending }) => {
                let className = 'text-wrapper-36';
                if (isActive) {
                  className += ' active';
                } else if (isPending) {
                  className += ' pending';
                }
                return className;
              }}
              style={({ isActive, isPending }) => ({
                color: isActive ? 'green' : 'white',
              })}
            >
              Overview
            </NavLink>
          </div>
          <div className='px-[20px]'>
            <NavLink
              to='/health'
              className={({ isActive, isPending }) => {
                let className = 'text-wrapper-36';
                if (isActive) {
                  className += ' active';
                } else if (isPending) {
                  className += ' pending';
                }
                return className;
              }}
              style={({ isActive, isPending }) => ({
                color: isActive ? 'green' : 'white',
              })}
            >
              Health
            </NavLink>
          </div>
          <div className='px-[20px]'>
            <NavLink
              to='/appointment'
              className={({ isActive, isPending }) => {
                let className = 'text-wrapper-36';
                if (isActive) {
                  className += ' active';
                } else if (isPending) {
                  className += ' pending';
                }
                return className;
              }}
              style={({ isActive, isPending }) => ({
                color: isActive ? 'green' : 'white',
              })}
            >
              Appointments
            </NavLink>
          </div>
          <div className='px-[20px]'>
            <NavLink
              to='/community'
              className={({ isActive, isPending }) => {
                let className = 'text-wrapper-36';
                if (isActive) {
                  className += ' active';
                } else if (isPending) {
                  className += ' text-wrapper-36';
                }
                return className;
              }}
              style={({ isActive, isPending }) => ({
                color: isActive ? 'green' : 'white',
              })}
            >
              Community
            </NavLink>
          </div>
        </div>

        <div className='w-[1px] h-[100px] object-contain flex justify-center mb-30'>
          <NavLink to='/community'>
            <PiNotificationFill className='w-10 h-10 mt-8 ml-20 text-white'  />
          </NavLink>
        </div>
    

        <div className='w-[60px] h-[10px] object-contain flex justify-center mb-10'>
          <NavLink to='/profilePage'>
            {profileImage ? (
              <img src={profileImage} alt='User Profile' className='profile-image' />
            ) : (
              <img src='/Lilly.png' alt='Placeholder' className='profile-image' />
            )}
          </NavLink>
        </div>

        <div className='w-[1px] h-[100px] object-contain flex justify-center mb-30'>
          <NavLink to='/community'>
            <IoMdSettings className='w-10 h-10 mt-8 mr-40 text-white'  />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
