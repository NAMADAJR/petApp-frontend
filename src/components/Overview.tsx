import { useState } from 'react';
import Calendar from 'react-calendar';
import './overview.css'
import './calendar.css';
import 'react-calendar/dist/Calendar.css'; 
import { Navbar } from './Navbar';


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];




// import { AtomsDeyNumber } from './AtomsDeyNumber'
// import { AtomsWeekDey } from './AtomsWeekDey'
// import carbonReminder from './carbon-reminder.svg'
// import dropdown2 from './dropdown-2.svg'
// import dropdown from './dropdown.svg'
// import group11 from './group-11.png'
// import group79 from './group-79.png'
// import group81 from './group-81.png'
// import iconamoonSettingsFill from './iconamoon-settings-fill.svg'
// import image10 from './image-10.png'
// import image11 from './image-11.png'
// import image12 from './image-12.png'
// import image from './image.svg'
// import lilly1 from './lilly-1.png'
// import line2 from './line-2.svg'
// import line32 from './line-3-2.svg'
// import line3 from './line-3.svg'
// import line42 from './line-4-2.svg'
// import line4 from './line-4.svg'
// import line52 from './line-5-2.svg'
// import line5 from './line-5.svg'
// import logo1 from './logo-1.png'
// import mynauiNotificationSolid from './mynaui-notification-solid.svg'
// import ouiArrowUp from './oui-arrow-up.svg'
// import petPal from './pet-pal.png'

export const Overview = () => {
  

  const [value, onChange] = useState<Value>(new Date());
  console.log(value);

  return (
    <div>
      <Navbar />
    <div className='overview-container'>

    <div className='bg-[#ffffff] flex flex-row justify-center w-full'>
      <div className='bg-[#ffffff] overflow-hidden w-[1512px] h-[982px] relative'>
        <div className='absolute w-[324px] h-[172px] top-32 left-[412px] bg-variable-collection-fade-minty-green rounded-[10px] overflow-hidden border border-solid border-variable-collection-light-green'>
          {/* <img
            className='w-[68px] h-[68px] top-2 left-[21px] absolute object-cover'
            alt='Image'
            src={image10}
          /> */}

          <div className='absolute top-[33px] left-[117px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-variable-collection-primary-color text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]'>
            Daily Steps
          </div>

          <div className="absolute top-[84px] left-[21px] [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-variable-collection-primary-color text-4xl tracking-[0] leading-[normal]">
            5,679
          </div>

          <div className='inline-flex items-start gap-2.5 px-2 py-1 absolute top-[139px] left-[21px] bg-[#f8debd] rounded'>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Mulish-SemiBold',Helvetica] text-black text-xs font-semibold tracking-[0] leading-[normal]">
              Normal
            </div>
          </div>

          {/* <img
            className='absolute w-[174px] h-[53px] top-[118px] left-[150px]'
            alt='Group'
            src={group79}
          /> */}
        </div>

        <div className='flex flex-col w-[696px] h-[301px] items-start gap-2.5 px-[29px] py-[37px] absolute top-[323px] left-10 rounded-[10px] border border-solid border-variable-collection-primary-color'>
          <div className='relative w-[641px] h-[222px] mr-[-3.00px]'>
            <div className='absolute w-24 h-7 top-[97px] left-0 bg-errorerror-50 rounded-lg border border-solid border-errorerror-100'>
              <div className='absolute top-[3px] left-[7px] font-small-body font-[number:var(--small-body-font-weight)] text-[#d03258] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                High Priority
              </div>
            </div>

            <div className='absolute w-[121px] h-7 top-[141px] left-0 bg-[#fcf5eb] rounded-lg border border-solid border-[#f7e1c1]'>
              <div className='absolute top-[3px] left-[7px] font-small-body font-[number:var(--small-body-font-weight)] text-[#f2a635] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                Medium Priority
              </div>
            </div>

            <div className='absolute w-[93px] h-7 top-[185px] left-0 bg-[#eaf8f1] rounded-lg border border-solid border-[#bde8d3]'>
              <div className='absolute top-[3px] left-[7px] font-small-body font-[number:var(--small-body-font-weight)] text-[#27a468] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                Low Priority
              </div>
            </div>

            <div className="top-[57px] left-[3px] absolute [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
              Status
            </div>

            <div className="absolute top-[57px] left-[177px] [font-family:'Instrument_Sans-SemiBold',Helvetica] text-[#39628e] text-base font-semibold tracking-[0] leading-[normal]">
              Place
            </div>

            <div className="absolute top-[57px] left-[355px] [font-family:'Instrument_Sans-SemiBold',Helvetica] text-[#39628e] text-base font-semibold tracking-[0] leading-[normal]">
              Date
            </div>

            <div className="absolute top-[57px] left-[526px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
              Time
            </div>

            <div className='absolute top-[101px] left-[177px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
              Krista Veterinary
            </div>

            <div className='top-[101px] left-[355px] absolute font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
              22.02.2024
            </div>

            <div className='absolute top-[101px] left-[526px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
              08:45 AM
            </div>

            <div className='absolute top-[145px] left-[177px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
              The Vet Lab
            </div>

            <div className='top-[145px] left-[355px] absolute font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
              22.02.2024
            </div>

            <div className='absolute top-[145px] left-[526px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
              10:30 AM
            </div>

            <div className='absolute top-[189px] left-[177px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
              Karisa Pet Grooming
            </div>

            <div className='top-[189px] left-[355px] absolute font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
              22.02.2024
            </div>

            <div className='absolute top-[189px] left-[526px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
              02:15 PM
            </div>

            <div className='absolute top-0 left-[3px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#39628e] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]'>
              Today’s Task
            </div>

            {/* <img
              className='absolute w-[604px] h-px top-[132px] left-[3px]'
              alt='Line'
              src={line2}
            /> */}

            {/* <img
              className='absolute w-[606px] h-px top-44 left-px'
              alt='Line'
              src={line3}
            /> */}

            {/* <img
              className='absolute w-[607px] h-px top-[222px] left-0'
              alt='Line'
              src={line5}
            /> */}

            {/* <img
              className='absolute w-[604px] h-px top-[86px] left-[3px]'
              alt='Line'
              src={line4}
            /> */}
          </div>
        </div>

        <div className='absolute w-[696px] h-[301px] top-[653px] left-10 bg-[#deefdf] rounded-[10px] border border-solid border-variable-collection-light-green'>
          <div className='relative w-[641px] h-[214px] top-10 left-[29px]'>
            <div className='absolute w-[54px] h-[25px] top-[88px] left-0 bg-successsuccess-50 rounded-lg border border-solid border-successsuccess-100' />

            <div className='top-[136px] absolute w-[85px] h-[25px] left-0 bg-[#fcf5eb] rounded-lg border border-solid border-[#f7e1c1]' />

            <div className='top-[180px] absolute w-[85px] h-[25px] left-0 bg-[#fcf5eb] rounded-lg border border-solid border-[#f7e1c1]' />

            <div className='absolute w-[641px] h-[214px] top-0 left-0'>
              <div className="absolute top-[49px] left-[163px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
                Vaccine
              </div>

              <div className="top-[49px] left-0 absolute [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
                Status
              </div>

              <div className='absolute top-[91px] left-[163px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                DHLP
              </div>

              <div className='absolute top-[139px] left-[163px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                Rabies
              </div>

              <div className='absolute top-[180px] left-[163px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                Deworming
              </div>

              <div className='absolute top-[92px] left-[9px] font-small-body font-[number:var(--small-body-font-weight)] text-[#27a468] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                Done
              </div>

              <div className='top-[139px] absolute left-[9px] font-small-body font-[number:var(--small-body-font-weight)] text-[#f2a635] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                Upcoming
              </div>

              <div className='top-[182px] absolute left-[9px] font-small-body font-[number:var(--small-body-font-weight)] text-[#f2a635] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                Upcoming
              </div>

              <div className="absolute top-[49px] left-[329px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
                Last Date
              </div>

              <div className='top-[91px] left-[329px] absolute font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                22.02.2024
              </div>

              <div className='top-[139px] left-[329px] absolute font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                22.02.2024
              </div>

              <div className='top-[180px] left-[329px] absolute font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                22.05.2024
              </div>

              <div className="absolute top-[49px] left-[511px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
                Frequency
              </div>

              <div className='top-[91px] absolute left-[511px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                Annual
              </div>

              <div className='top-[139px] absolute left-[511px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                Annual
              </div>

              <div className='absolute top-[180px] left-[511px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]'>
                3 months
              </div>

              <div className='absolute top-0 left-0 font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#39628e] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]'>
                Vaccinations
              </div>

              {/* <img
                className='absolute w-[607px] h-px top-[124px] left-0'
                alt='Line'
                src={image}
              /> */}

              {/* <img
                className='absolute w-[607px] h-px top-[168px] left-0'
                alt='Line'
                src={line32}
              /> */}

              {/* <img
                className='absolute w-[607px] h-px top-[214px] left-0'
                alt='Line'
                src={line52}
              /> */}

              {/* <img
                className='absolute w-[607px] h-px top-20 left-0'
                alt='Line'
                src={line42}
              /> */}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-[696px] h-[631px] items-center gap-8 px-5 py-[31px] absolute top-[323px] left-[784px] bg-white rounded-[10px] border border-solid border-variable-collection-primary-color'>
          <div className='calendar-div'>
            <div className="calendar-div1">
            <Calendar onChange={onChange} value={value} />
            </div>
            {/* 
            <img
              className='left-0 absolute w-4 h-4 top-[5px]'
              alt='Dropdown'
              src={dropdown}
            /> */}

            {/* <img
              className='left-[183px] absolute w-4 h-4 top-[5px]'
              alt='Dropdown'
              src={dropdown2}
            /> */}
          </div>

          <div className='flex flex-col w-[512px] h-[438px] items-center relative'>
            <div className='flex flex-col items-center justify-between relative flex-1 self-stretch w-full grow'>
              <div className='flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]'>
                {/* <AtomsWeekDey
                  text='Mo'
                  textClassName="!text-variable-collection-primary-color !text-xs !font-extrabold ![font-family:'Lato-ExtraBold',Helvetica]"
                  weekend={false}
                />
                <AtomsWeekDey
                  text='Tu'
                  textClassName="!text-variable-collection-primary-color !text-xs !font-extrabold ![font-family:'Lato-ExtraBold',Helvetica]"
                  weekend={false}
                />
                <AtomsWeekDey
                  text='We'
                  textClassName="!text-variable-collection-primary-color !text-xs !font-extrabold ![font-family:'Lato-ExtraBold',Helvetica]"
                  weekend={false}
                />
                <AtomsWeekDey
                  text='Th'
                  textClassName="!text-variable-collection-primary-color !text-xs !font-extrabold ![font-family:'Lato-ExtraBold',Helvetica]"
                  weekend={false}
                />
                <AtomsWeekDey
                  text='Fr'
                  textClassName="!text-variable-collection-primary-color !text-xs !font-extrabold ![font-family:'Lato-ExtraBold',Helvetica]"
                  weekend={false}
                />
                <AtomsWeekDey
                  text='Sa'
                  textClassName="!text-variable-collection-light-green !text-xs !font-extrabold ![font-family:'Lato-ExtraBold',Helvetica]"
                  weekend
                />
                <AtomsWeekDey
                  text='Su'
                  textClassName="!text-variable-collection-light-green !text-xs !font-extrabold ![font-family:'Lato-ExtraBold',Helvetica]"
                  weekend
                /> */}
              </div>

              <div className='flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]'>
                {/* <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='29'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='30'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='31'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='1'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='2'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='3'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='4'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                /> */}
              </div>

              <div className='flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]'>
                {/* <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='5'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='6'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='7'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='8'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='9'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='10'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='11'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                /> */}
              </div>

              <div className='flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]'>
                {/* <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='12'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='13'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='14'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='15'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='16'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='17'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='18'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                /> */}
              </div>

              <div className='flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]'>
                {/* <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='19'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='20'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='21'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  className='!rounded-[20px] !bg-variable-collection-light-green'
                  fill
                  strok={false}
                  text='22'
                  textClassName="!text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='23'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='24'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='25'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                /> */}
              </div>

              <div className='flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]'>
                {/* <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='26'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='27'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='28'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active
                  fill={false}
                  strok={false}
                  text='29'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='1'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='2'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='3'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                /> */}
              </div>

              <div className='flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]'>
                {/* <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='4'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='5'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='6'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='7'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='8'
                  textClassName="!text-variable-collection-primary-color !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend={false}
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='9'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                />
                <AtomsDeyNumber
                  active={false}
                  fill={false}
                  strok={false}
                  text='10'
                  textClassName="!text-variable-collection-light-green !text-base !font-bold ![font-family:'Lato-Bold',Helvetica]"
                  weekend
                /> */}
              </div>
            </div>
          </div>

          <div className='flex w-[656px] h-9 items-center justify-between px-[18px] py-2 relative bg-variable-collection-faded-blue rounded-[10px]'>
            <div className="relative w-fit mt-[-0.50px] [font-family:'Lato-Bold',Helvetica] font-bold text-variable-collection-primary-color text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              TODAY
            </div>

            <div className="relative w-fit mt-[-0.50px] [font-family:'Lato-Bold',Helvetica] font-bold text-variable-collection-primary-color text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              CLOSE
            </div>
          </div>
        </div>

        <div className='absolute w-[326px] h-[173px] top-[127px] left-[38px] rounded-[10px] overflow-hidden'>
          <div className='relative h-[173px]'>
            <div className='top-px left-0.5 bg-variable-collection-faded-blue border-variable-collection-primary-color absolute w-[324px] h-[172px] rounded-[10px] border border-solid' />

            <div className="absolute top-[106px] left-[69px] [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-variable-collection-primary-color text-base tracking-[0] leading-[normal]">
              Kg
            </div>

            <div className="top-[90px] left-6 text-4xl absolute [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-variable-collection-primary-color tracking-[0] leading-[normal]">
              18
            </div>

            <div className='inline-flex items-start gap-2.5 px-2 py-1 absolute top-[140px] left-6 bg-[#f8debd] rounded'>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Mulish-SemiBold',Helvetica] text-black text-xs font-semibold tracking-[0] leading-[normal]">
                Normal
              </div>
            </div>

            <div className='absolute top-[37px] left-[115px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-variable-collection-primary-color text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]'>
              Body Weight
            </div>

            {/* <img
              className='w-[111px] h-[107px] top-0 left-0 absolute object-cover'
              alt='Image'
              src={image12}
            /> */}

            {/* <img
              className='absolute w-[174px] h-[54px] top-[119px] left-[152px]'
              alt='Group'
              src={group11}
            /> */}
          </div>
        </div>

        <div className='absolute w-[325px] h-[174px] top-32 left-[784px]'>
          <div className='relative w-[324px] h-[174px]'>
            <div className='top-0 left-0 bg-variable-collection-fade-orange border-purple-fade absolute w-[324px] h-[172px] rounded-[10px] border border-solid' />

            <div className='absolute top-[35px] left-[109px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-variable-collection-primary-color text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]'>
              Feeding
            </div>

            <div className="top-[89px] left-[22px] text-[32px] absolute [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-variable-collection-primary-color tracking-[0] leading-[normal]">
              789
            </div>

            <div className='inline-flex items-start gap-2.5 px-2 py-1 absolute top-[139px] left-[22px] bg-[#f8debd] rounded'>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Mulish-SemiBold',Helvetica] text-black text-xs font-semibold tracking-[0] leading-[normal]">
                Normal
              </div>
            </div>

            {/* <img
              className='w-[72px] h-[72px] top-3.5 left-6 absolute object-cover'
              alt='Image'
              src={image11}
            /> */}

            <div className="absolute top-[105px] left-[88px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-variable-collection-primary-color text-base tracking-[0] leading-[normal]">
              Oz
            </div>

            {/* <img
              className='absolute w-[174px] h-[55px] top-[119px] left-[150px]'
              alt='Group'
              src={group81}
            /> */}
          </div>
        </div>

        <div className='flex flex-col w-[324px] h-[172px] items-center gap-0.5 px-[76px] py-8 absolute top-32 left-[1156px] bg-variable-collection-primary-color rounded-[10px]'>
          {/* <img
            className='relative w-[68px] h-[68px]'
            alt='Carbon reminder'
            src={carbonReminder}
          /> */}

          <div className="relative w-fit [font-family:'Instrument_Sans-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
            Add a reminder
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
