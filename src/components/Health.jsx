import React from "react";
import "./Health.css";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { GoMegaphone } from "react-icons/go";
import { Navbar } from "./Navbar";


export const Health = () => {
  return (
    <div className="health-page-full">
      <Navbar />
    <div className="health">
      <div className="div">
        <div className="health-overview">
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">Health Overview</div>
            </div>

            <div className="sidebar-link">
              <div className="text-wrapper-2">Monthly</div>

              {/* <img className="img" alt="Frame" src={frame3} /> */}
            </div>
          </div>

          <div className="frame-2">
            <div className="sidebar-link-wrapper">
              <div className="sidebar-link-2">
                {/* <img className="icon-instance-node" alt="Frame" src={frame4} /> */}

                <div className="text-wrapper-3">Stress level</div>
              </div>
            </div>

            <div className="frame-3">
              <div className="sidebar-link-2">
                {/* <img
                                    className="icon-instance-node"
                                    alt="Icon pulse"
                                    src={pulse}
                                /> */}

                <div className="text-wrapper-4">Pulse</div>
              </div>
            </div>

            <div className="frame-wrapper">
              <div className="frame-4">
                <div className="sidebar-link-2">
                  {/* <img
                                        className="icon-instance-node"
                                        alt="Frame"
                                        src={frame5}
                                    /> */}

                  <div className="text-wrapper-4">Temperature</div>
                </div>
              </div>
            </div>

            <div className="frame-3">
              <div className="sidebar-link-2">
                {/* <img className="icon-instance-node" alt="Frame" src={frame6} /> */}

                <div className="text-wrapper-4">Calories burned�</div>
              </div>
            </div>
          </div>

          <div className="chart">
            <div className="frame-5">
              <div className="text-wrapper-5">10</div>

              <div className="text-wrapper-6">9</div>

              <div className="text-wrapper-6">8</div>

              <div className="text-wrapper-6">7</div>

              <div className="text-wrapper-6">6</div>

              <div className="text-wrapper-6">5</div>

              <div className="text-wrapper-6">4</div>

              <div className="text-wrapper-6">3</div>

              <div className="text-wrapper-6">2</div>

              <div className="text-wrapper-6">1</div>
            </div>

            {/* <img className="vector" alt="Vector" src={vector4} />

                        <img className="vector-2" alt="Vector" src={vector5} />

                        <img className="vector-3" alt="Vector" src={vector6} />

                        <img className="vector-4" alt="Vector" src={vector7} />

                        <img className="vector-5" alt="Vector" src={vector8} /> */}

            <div className="overlap-group">
              {/* <img className="vector-6" alt="Vector" src={vector9} />

                            <img className="vector-7" alt="Vector" src={vector10} />

                            <img className="vector-8" alt="Vector" src={vector11} />

                            <img className="vector-9" alt="Vector" src={vector12} />

                            <img className="vector-10" alt="Vector" src={vector13} />

                            <img className="group" alt="Group" src={group4} /> */}
            </div>

            <div className="frame-6">
              <div className="text-wrapper-7">September</div>

              <div className="text-wrapper-7">November</div>

              <div className="text-wrapper-7">December</div>

              <div className="text-wrapper-7">January</div>
            </div>
          </div>
        </div>

        <div className="frame-7">
          <div className="frame-8">
            <div className="frame-9">
              <div className="div-wrapper">
                <div className="text-wrapper">Activity</div>
              </div>

              <div className="sidebar-link-3">
                <div className="text-wrapper-8">Daily</div>

                {/* <img className="img" alt="Frame" src={frame7} /> */}
              </div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="frame-10">
                  <div className="text-wrapper-9">25%</div>
                </div>

                <div className="ellipse-wrapper">
                  {/* <img className="ellipse" alt="Ellipse" src={ellipse52} /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="frame-11">
            <div className="frame-9">
              <div className="div-wrapper">
                <div className="text-wrapper">Sleep</div>
              </div>

              <div className="sidebar-link-3">
                <div className="text-wrapper-8">Weekly</div>

                {/* <img className="img" alt="Frame" src={frame8} /> */}
              </div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="frame-12">
                  <div className="text-wrapper-9">79%</div>
                </div>

                <div className="ellipse-wrapper">
                  {/* <img className="ellipse-2" alt="Ellipse" src={ellipse5} /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="frame-13">
            <div className="frame-9">
              <div className="div-wrapper">
                <div className="text-wrapper">Feeding</div>
              </div>

              <div className="sidebar-link-3">
                <div className="text-wrapper-8">Weekly</div>

                {/* <img className="img" alt="Frame" src={frame} /> */}
              </div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="frame-12">
                  <div className="text-wrapper-9">52%</div>
                </div>

                <div className="ellipse-wrapper">
                  {/* <img className="ellipse-3" alt="Ellipse" src={image} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-14">
          <div className="frame-9">
            <div className="vaccination-schedule">
              Vaccination&nbsp;&nbsp;Schedule
            </div>

            <div className="frame-15">
              {/* <Search className="icon-instance-node" opacity="0.7" /> */}
              <div className="frame-16">
                <div className="sidebar-link-3">
                  <div className="text-wrapper-8">By type</div>

                  {/* <img className="img" alt="Frame" src={frame2} /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="frame-17">
            <div className="table-header">
              <div className="frame-18">
                <div className="frame-19">
                  <div className="text-wrapper-10">Name</div>

                  <div className="text-wrapper-11">Type</div>

                  <div className="text-wrapper-12">Date</div>
                </div>
              </div>
            </div>

            <div className="table-header-2">
              <div className="frame-20">
                <div className="text-wrapper-13">Rabies</div>

                <div className="search-bar">
                  <div className="text-wrapper-14">Overdue</div>
                </div>

                <div className="frame-21">
                  <div className="frame-22">
                    <div className="text-wrapper-15">01 Dec 2023</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-header-3">
              <div className="frame-20">
                <div className="text-wrapper-13">DHLP</div>

                <div className="search-bar-2">
                  <div className="text-wrapper-16">Noncore</div>
                </div>

                <div className="frame-21">
                  <div className="frame-22">
                    <div className="text-wrapper-15">11 Dec 2024</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-header-2">
              <div className="frame-20">
                <div className="text-wrapper-17">Deworm</div>

                <div className="search-bar-3">
                  <div className="text-wrapper-18">Core</div>
                </div>

                <div className="frame-21">
                  <div className="frame-22">
                    <div className="text-wrapper-19">27 Jun 2024</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-header-2">
              <div className="frame-20">
                <div className="text-wrapper-20">Calicivirus</div>

                <div className="search-bar-3">
                  <div className="text-wrapper-18">Core</div>
                </div>

                <div className="frame-21">
                  <div className="frame-22">
                    <div className="text-wrapper-21">16 Sep 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-23">
          <div className="frame-24">
            <div className="frame-9">
              <div className="frame-16">
                <CiCalendar
                                    color="rgba(56, 97, 141, 1)"
                                   
                                    size= "2.5rem"
                                    type="round"
                                />
                <div className="frame-25">
                  <a href="/makeAppointment" className="text-wrapper">Book an Appointment</a>
                  

                  <p className="text-wrapper-22">
                    Find a veterinarian and specialization
                  </p>
                </div>
              </div>
              {/* 
                            <CiCalendar className="icon-instance-node" color="#667185" /> */}
            </div>

            {/* <Dividers className="dividers-instance" type="default" /> */}
            <div className="frame-9">
              <div className="frame-16">
                <AiOutlineMessage
                                    color="rgba(56, 97, 141, 1)"
                                  
                                    size="2.5rem"
                                    type="round"
                                />
                <div className="frame-25">
                  <a href="#" className="text-wrapper">Request Consultation</a>

                  <p className="text-wrapper-22">
                    Talk to a specialist veterinarian
                  </p>
                </div>
              </div>

              {/* <ChevronRight className="icon-instance-node" color="#667185" /> */}
            </div>

            {/* <Dividers className="dividers-instance" type="default" /> */}
            <div className="frame-9">
              <div className="frame-16">
                <IoLocationOutline
                                    color="rgba(56, 97, 141, 1)"
                                   
                                    size="2.5rem"
                                    type="round"
                                />
                <div className="frame-25">
                  <a href="#" className="text-wrapper">Locate a veterinary near you</a>

                  <div className="text-wrapper-22">
                    Find closest veterinarian services
                  </div>
                </div>
              </div>

              {/* <ChevronRight className="icon-instance-node" color="#667185" /> */}
            </div>

            {/* <Dividers className="dividers-instance" type="default" /> */}
            <div className="frame-9">
              <div className="frame-16">
                <GoMegaphone
                                    color="rgba(56, 97, 141, 1)"
                                   
                                    size="2.5rem"
                                    type="round"
                                />
                <div className="frame-25">
                  <a href="#"  className="text-wrapper">Emergency</a>

                  <div className="text-wrapper-22">Request immediate help</div>
                </div>
              </div>

              {/* <ChevronRight className="icon-instance-node" color="#667185" /> */}
            </div>
          </div>

          <div className="text-wrapper-23">Quick Actions</div>

          {/* <Dividers className="design-component-instance-node" type="default" /> */}
        </div>

        {/* <div className="menu"> */}
        {/* <div className="frame-26"> */}
        {/* <div className="group-2"> */}
        {/* <img className="logo" alt="Logo" src={logo1} />

                            <img className="pet-pal" alt="Pet pal" src={petPal} /> */}
        {/* </div> */}

        {/* <div className="frame-27"> */}
        {/* <img
                                className="mynaui-notification"
                                alt="Mynaui notification"
                                src={mynauiNotificationSolid}
                            /> */}

        {/* <div className="frame-28"> */}
        {/* <img className="lilly" alt="Lilly" src={lilly1} /> */}

        {/* <img
                                    className="oui-arrow-up"
                                    alt="Oui arrow up"
                                    src={ouiArrowUp}
                                /> */}
        {/* </div> */}

        {/* <img
                                className="iconamoon-settings"
                                alt="Iconamoon settings"
                                src={iconamoonSettingsFill}
                            /> */}
        {/* </div>
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};
