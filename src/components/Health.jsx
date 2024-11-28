import React from 'react'
import './Health.css'
import { CiCalendar } from 'react-icons/ci'
import { AiOutlineMessage } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { GoMegaphone } from 'react-icons/go'
import { Navbar } from './Navbar'
import Healthdashboard from "./Healthdashboard";
import CircleProgress from "./CircleProgress"

export const Health = () => {
  const handleButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const googleMapsUrl = `https://www.google.com/maps/search/veterinary+hospitals/@${latitude},${longitude},14z`
          window.open(googleMapsUrl, '_blank')
        },
        (error) => {
          console.error('Error retrieving location: ', error.message)
          alert(
            'Unable to retrieve your location. Please enable location services.'
          )
        }
      )
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  return (
    <div className='health-page-full'>
      <Navbar />
      <div className='health'>
        <div className='div'>
          <div className='health-overview'>
            <Healthdashboard />
          </div>

          <div className='frame-7'>
            <div className='w-[100%] h-full flex justify-center'>
            <CircleProgress/>
            </div>
          </div>

          <div className='frame-14'>
            <div className='frame-9'>
              <div className='vaccination-schedule'>
                Vaccination&nbsp;&nbsp;Schedule
              </div>

              <div className='frame-15'>
                {/* <Search className="icon-instance-node" opacity="0.7" /> */}
                <div className='frame-16'>
                  <div className='sidebar-link-3'>
                    <div className='text-wrapper-8'>By type</div>

                    {/* <img className="img" alt="Frame" src={frame2} /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className='frame-17'>
              <div className='table-header'>
                <div className='frame-18'>
                  <div className='frame-19'>
                    <div className='text-wrapper-10'>Name</div>

                    <div className='text-wrapper-11'>Type</div>

                    <div className='text-wrapper-12'>Date</div>
                  </div>
                </div>
              </div>

              <div className='table-header-2'>
                <div className='frame-20'>
                  <div className='text-wrapper-13'>Rabies</div>

                  <div className='search-bar'>
                    <div className='text-wrapper-14'>Overdue</div>
                  </div>

                  <div className='frame-21'>
                    <div className='frame-22'>
                      <div className='text-wrapper-15'>01 Dec 2023</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='table-header-3'>
                <div className='frame-20'>
                  <div className='text-wrapper-13'>DHLP</div>

                  <div className='search-bar-2'>
                    <div className='text-wrapper-16'>Noncore</div>
                  </div>

                  <div className='frame-21'>
                    <div className='frame-22'>
                      <div className='text-wrapper-15'>11 Dec 2024</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='table-header-2'>
                <div className='frame-20'>
                  <div className='text-wrapper-17'>Deworm</div>

                  <div className='search-bar-3'>
                    <div className='text-wrapper-18'>Core</div>
                  </div>

                  <div className='frame-21'>
                    <div className='frame-22'>
                      <div className='text-wrapper-19'>27 Jun 2024</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='table-header-2'>
                <div className='frame-20'>
                  <div className='text-wrapper-20'>Calicivirus</div>

                  <div className='search-bar-3'>
                    <div className='text-wrapper-18'>Core</div>
                  </div>

                  <div className='frame-21'>
                    <div className='frame-22'>
                      <div className='text-wrapper-21'>16 Sep 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='frame-23'>
            <div className='frame-24'>
              <div className='frame-9'>
                <div className='frame-16'>
                  <CiCalendar
                    color='rgba(56, 97, 141, 1)'
                    size='2.5rem'
                    type='round'
                  />
                  <div className='frame-25'>
                    <a href='/makeAppointment' className='text-wrapper'>
                      Book an Appointment
                    </a>

                    <p className='text-wrapper-22'>
                      Find a veterinarian and specialization
                    </p>
                  </div>
                </div>
                <a
                  href='/makeAppointment'
                  className='h-[80%] w-auto p-0 bg-transparent '>
                  <img src='./arrow.png' alt='' />
                </a>
              </div>

              {/* <Dividers className="dividers-instance" type="default" /> */}
              <div className='frame-9'>
                <div className='frame-16'>
                  <AiOutlineMessage
                    color='rgba(56, 97, 141, 1)'
                    size='2.5rem'
                    type='round'
                  />
                  <div className='frame-25'>
                    <a href='/consultation' className='text-wrapper'>
                      Request Consultation
                    </a>

                    <p className='text-wrapper-22'>
                      Talk to a specialist veterinarian
                    </p>
                  </div>
                </div>

                <a href='/consultation' className='h-[80%] w-auto p-0 bg-transparent '>
                  <img src='./arrow.png' alt='' />
                </a>
              </div>

              {/* <Dividers className="dividers-instance" type="default" /> */}
              <div className='frame-9'>
                <div className='frame-16'>
                  <IoLocationOutline
                    color='rgba(56, 97, 141, 1)'
                    size='2.5rem'
                    type='round'
                  />
                  <div className='frame-25'>
                    <button
                      style={{
                        background: 'none',
                        color: 'rgba(56, 97, 141, 1)',
                        fontSize: '1.5rem',
                        padding: '0px',
                        fontFamily: 'Helvetica',
                        fontWeight: 'bold',
                      }}
                      onClick={handleButtonClick}>
                      Locate vet near you
                    </button>

                    <div className='text-wrapper-22'>
                      Find closest veterinarian services
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleButtonClick}
                  className='h-[80%] w-auto p-0 bg-transparent '>
                  <img src='./arrow.png' alt='' />
                </button>
              </div>

              {/* <Dividers className="dividers-instance" type="default" /> */}
              <div className='frame-9'>
                <div className='frame-16'>
                  <GoMegaphone
                    color='rgba(56, 97, 141, 1)'
                    size='2.5rem'
                    type='round'
                  />
                  <div className='frame-25'>
                    <a href='#' className='text-wrapper'>
                      Emergency
                    </a>

                    <div className='text-wrapper-22'>
                      Request immediate help
                    </div>
                  </div>
                </div>

                <a href='#' className='h-[80%] w-auto p-0 bg-transparent '>
                  <img src='./arrow.png' alt='' />
                </a>
              </div>
            </div>

            <div className='text-wrapper-23'>Quick Actions</div>

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
  )
}
