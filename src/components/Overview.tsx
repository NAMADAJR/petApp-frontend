import React, { useState } from "react";
import '../index.css'

import "./overview.css";
import "./calendar.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { FaTasks } from "react-icons/fa";
import { Navbar } from "./Navbar";
import { TaskRow } from "./TaskRow";
import TaskForm from "./TaskForm";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type Task = {
  id: number;
  priority: string;
  place: string;
  date: string;
  time: string;
};

export const Overview = () => {
  const [selected, setSelected] = useState<Date>();
  const [tasks, setTasks] = useState<Task[]>([]); // Notice the Task[] type
  const [value, onChange] = useState<Value>(new Date());
  const [showForm, setShowForm] = useState(false);
  console.log(value);

  const toggleFormVisibility = () => {
    setShowForm((prevState) => !prevState); // Toggle the visibility of the form
  };

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowForm(false);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <Navbar />
      <div className="overview-container">
        <div className="bg-[#ffffff] flex flex-row justify-center w-full">
          <div className="bg-[#ffffff] overflow-hidden w-[1512px] h-[982px] relative">
            <div className="absolute w-[324px] h-[172px] top-32 left-[412px] bg-[#b0f0c9] rounded-[10px] overflow-hidden border border-solid border-variable-collection-light-green">
              <img
                className="w-[68px] h-[68px] top-2 left-[21px] absolute object-cover"
                alt="Image"
                src="public/Step_Activity Icon.png"
              />

              <div className="absolute top-[33px] left-[117px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-variable-collection-primary-color text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)] ">
                Daily Steps
              </div>

              <div className="absolute top-[84px] left-[21px] [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-variable-collection-primary-color text-4xl tracking-[0] leading-[normal]">
                5,679
              </div>

              <div className="inline-flex items-start gap-2.5 px-2 py-1 absolute top-[139px] left-[21px] bg-[#f8debd] rounded">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Mulish-SemiBold',Helvetica] text-black text-xs font-semibold tracking-[0] leading-[normal]">
                  Normal
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[696px] max-h-[350px] items-start gap-4 px-6 py-6 absolute top-[323px] left-10 rounded-[10px] border border-solid border-variable-collection-primary-color bg-white shadow-md overflow-y-auto">
              {/* Header */}
              <div className="relative w-full">
                <h2 className="font-bold text-variable-collection-primary-color text-2xl mb-4">
                  Today's Tasks
                </h2>
              </div>

              {/* Task List */}
              <div className="tasks-container w-full">
                {tasks.length > 0 ? (
                  <ul className="flex flex-col gap-4">
                    {tasks.map((task) => (
                      <li
                        key={task.id}
                        className="flex justify-between items-center p-4 bg-variable-collection-light-green border border-gray-300 rounded-lg shadow-sm"
                      >
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium text-gray-700">
                            <span className="font-semibold text-gray-800">
                              Place:{" "}
                            </span>
                            {task.place}
                          </p>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold text-gray-800">
                              Date:{" "}
                            </span>
                            {task.date}
                          </p>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold text-gray-800">
                              Time:{" "}
                            </span>
                            {task.time}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            task.priority === "High Priority"
                              ? "bg-red-200 text-red-700"
                              : task.priority === "Medium Priority"
                              ? "bg-yellow-200 text-yellow-700"
                              : "bg-green-200 text-green-700"
                          }`}
                        >
                          {task.priority}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  /* Placeholder message if no tasks */
                  <p className="text-gray-500 text-center w-full mt-10">
                    No tasks for today. Add a task to get started!
                  </p>
                )}
              </div>
            </div>

            <div className="absolute w-[696px] h-[301px] top-[653px] left-10 bg-[#deefdf] rounded-[10px] border border-solid border-variable-collection-light-green">
              <div className="relative w-[641px] h-[214px] top-10 left-[29px]">
                <div className="absolute w-[54px] h-[25px] top-[88px] left-0 bg-successsuccess-50 rounded-lg border border-solid border-successsuccess-100" />

                <div className="top-[136px] absolute w-[85px] h-[25px] left-0 bg-[#fcf5eb] rounded-lg border border-solid border-[#f7e1c1]" />

                <div className="top-[180px] absolute w-[85px] h-[25px] left-0 bg-[#fcf5eb] rounded-lg border border-solid border-[#f7e1c1]" />

                <div className="absolute w-[641px] h-[214px] top-0 left-0">
                  <div className="absolute top-[49px] left-[163px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
                    Vaccine
                  </div>

                  <div className="top-[49px] left-0 absolute [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
                    Status
                  </div>

                  <div className="absolute top-[91px] left-[163px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    DHLP
                  </div>

                  <div className="absolute top-[139px] left-[163px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    Rabies
                  </div>

                  <div className="absolute top-[180px] left-[163px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    Deworming
                  </div>

                  <div className="absolute top-[92px] left-[9px] font-small-body font-[number:var(--small-body-font-weight)] text-[#27a468] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    Done
                  </div>

                  <div className="top-[139px] absolute left-[9px] font-small-body font-[number:var(--small-body-font-weight)] text-[#f2a635] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    Upcoming
                  </div>

                  <div className="top-[182px] absolute left-[9px] font-small-body font-[number:var(--small-body-font-weight)] text-[#f2a635] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    Upcoming
                  </div>

                  <div className="absolute top-[49px] left-[329px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
                    Last Date
                  </div>

                  <div className="top-[91px] left-[329px] absolute font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    22.02.2024
                  </div>

                  <div className="top-[139px] left-[329px] absolute font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    22.02.2024
                  </div>

                  <div className="top-[180px] left-[329px] absolute font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    22.05.2024
                  </div>

                  <div className="absolute top-[49px] left-[511px] [font-family:'Instrument_Sans-SemiBold',Helvetica] font-semibold text-[#39628e] text-base tracking-[0] leading-[normal]">
                    Frequency
                  </div>

                  <div className="top-[91px] absolute left-[511px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    Annual
                  </div>

                  <div className="top-[139px] absolute left-[511px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    Annual
                  </div>

                  <div className="absolute top-[180px] left-[511px] font-small-body font-[number:var(--small-body-font-weight)] text-[#39628e] text-[length:var(--small-body-font-size)] tracking-[var(--small-body-letter-spacing)] leading-[var(--small-body-line-height)] [font-style:var(--small-body-font-style)]">
                    3 months
                  </div>

                  <div className="absolute top-0 left-0 font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#39628e] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Vaccinations
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[696px] h-[631px] items-center gap-8 px-5 py-[31px] absolute top-[323px] left-[784px] bg-white rounded-[10px] border border-solid border-variable-collection-primary-color">
              <div className="calendar-div">
                <div className="calendar-div1">
                  <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    className="w-[20rem] h-20 "
                    footer={
                      selected
                        ? `Selected: ${selected.toLocaleDateString()}`
                        : "Pick a day."
                    }
                  />
                </div>
              </div>

              <div className="flex w-[656px] h-9 items-center justify-between px-[18px] py-2 relative bg-variable-collection-faded-blue rounded-[10px]">
                <div className="relative w-fit mt-[-0.50px] [font-family:'Lato-Bold',Helvetica] font-bold text-variable-collection-primary-color text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  TODAY
                </div>

                <div className="relative w-fit mt-[-0.50px] [font-family:'Lato-Bold',Helvetica] font-bold text-variable-collection-primary-color text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  CLOSE
                </div>
              </div>
            </div>

            <div className="absolute w-[326px] h-[173px] top-[127px] left-[38px] rounded-[10px] overflow-hidden">
              <div className="relative h-[173px]">
                <div className="top-px left-0.5 bg-[rgba(207,226,230,1)] border-variable-collection-primary-color absolute w-[324px] h-[172px] rounded-[10px] border border-solid" />

                <div className="absolute top-[106px] left-[69px] [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-variable-collection-primary-color text-base tracking-[0] leading-[normal]">
                  Kg
                </div>

                <div className="top-[90px] left-6 text-4xl absolute [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-variable-collection-primary-color tracking-[0] leading-[normal]">
                  18
                </div>

                <div className="inline-flex items-start gap-2.5 px-2 py-1 absolute top-[140px] left-6 bg-[#f8debd] rounded">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Mulish-SemiBold',Helvetica] text-black text-xs font-semibold tracking-[0] leading-[normal]">
                    Normal
                  </div>
                </div>

                <div className="absolute top-[37px] left-[115px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-variable-collection-primary-color text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                  Body Weight
                </div>

                <img
                  className="w-[111px] h-[107px] top-0 left-0 absolute object-cover"
                  alt="Image"
                  src="public/Weight Icon.png"
                />
              </div>
            </div>

            <div className="absolute w-[325px] h-[174px] top-32 left-[784px] bg-[rgba(255,245,233,1)]">
              <div className="relative w-[324px] h-[174px]">
                <div className="top-0 left-0 bg-variable-collection-fade-orange border-purple-fade absolute w-[324px] h-[172px] rounded-[10px] border border-solid" />

                <div className="absolute top-[35px] left-[109px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-variable-collection-primary-color text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                  Feeding
                </div>

                <div className="top-[89px] left-[22px] text-[32px] absolute [font-family:'Instrument_Sans-Bold',Helvetica] font-bold text-variable-collection-primary-color tracking-[0] leading-[normal]">
                  789
                </div>

                <div className="inline-flex items-start gap-2.5 px-2 py-1 absolute top-[139px] left-[22px] bg-[#f8debd] rounded">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Mulish-SemiBold',Helvetica] text-black text-xs font-semibold tracking-[0] leading-[normal]">
                    Normal
                  </div>
                </div>

                <img
                  className="w-[72px] h-[72px] top-3.5 left-6 absolute object-cover"
                  alt="Image"
                  src="public/Feeding Icon.png"
                />

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

            <div className="flex flex-col w-[324px] h-[172px] items-center gap-0.5 px-[76px] py-8 absolute top-32 left-[1156px] bg-variable-collection-primary-color rounded-[10px]">
              <FaTasks className="w-[72px] h-[72px] mt-10 ml-20 left-6 absolute object-cover text-white" />

              <div className="relative w-fit [font-family:'Instrument_Sans-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
                <button className="add-task-btn" onClick={toggleFormVisibility}>
                  Add Task
                </button>
              </div>
            </div>

            {/* Render TaskForm conditionally */}
            {showForm && (
              <div className="task-form-container">
                <TaskForm
                  onAddTask={handleAddTask}
                  onCancel={() => setShowForm(false)} // Hide the form when canceled
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
