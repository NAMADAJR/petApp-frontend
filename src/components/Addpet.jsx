import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const AddPet = () => {
  const [petDetails, setPetDetails] = useState({
    name: "",
    type: "",
    breed: "",
    gender: "",
    dob: "", // Ensure this starts as an empty string
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Set loading to true when the request starts
    setMessage(""); // Clear previous messages

    const token = localStorage.getItem("tokens"); // Retrieve token from local storage
    const petData = {
      name: petDetails.name,
      type: petDetails.type,
      breed: petDetails.breed,
      gender: petDetails.gender,
      date_of_birth: petDetails.dob, // Ensure the date is in YYYY-MM-DD format
    };

    try {
      const response = await fetch("/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(petData),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to add pet, please try again");
      }

      const data = await response.json();
      setMessage("Pet added successfully!"); // Set success message
      console.log("Response data:", data); // Log the response data

      // Optional: Reset form fields after submission
      setPetDetails({
        name: "",
        type: "",
        breed: "",
        gender: "",
        dob: "",
      });
    } catch (error) {
      setMessage(`Error: ${error.message}`); // Set error message
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };

  return (
    <div>
       <Navbar />
    <div className="bg-[#deefdf] flex flex-row justify-center w-full">
     
      <div className="bg-[#deefdf] w-[1512px] h-[1489px]">
        <form
          onSubmit={handleSubmit}
          className="relative w-[1361px] h-[1344px] top-[68px] left-16 bg-[#ffffff] rounded-[10px] shadow-[0px_1px_3px_#0000001a]"
        >
          <div className="flex flex-col w-[1133px] items-start gap-[33px] absolute top-[72px] left-[67px]">
            <div className="relative self-stretch mt-[-1.00px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[#39628e] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
              Add Pet Details
            </div>

            {message && <div className="text-center text-red-500">{message}</div>}

            <div className="flex items-start gap-[173px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[480px] items-start gap-[37px] relative">
                <div className="gap-[18px] self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
                  <label className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Pet’s Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Pet’s Name"
                    value={petDetails.name}
                    onChange={handleChange}
                    className="flex h-[45px] items-center p-3 relative self-stretch w-full bg-greyish rounded-[10px] border border-solid border-[#b3b3b3] text-[#90a0b7]"
                  />
                </div>

                <div className="gap-3.5 self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
                  <label className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Pet’s Breed
                  </label>
                  <input
                    type="text"
                    name="breed"
                    placeholder="Breed"
                    value={petDetails.breed}
                    onChange={handleChange}
                    className="flex h-[45px] items-center p-3 relative self-stretch w-full border-dark-grey h-[45px] bg-greyish rounded-lg border border-solid text-purple-fade"
                  />
                </div>

                <div className="relative self-stretch w-full h-[88px]">
                  <label className="absolute w-[480px] -top-px left-0 font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={petDetails.dob || ""} // Ensure it's an empty string if dob is undefined
                    onChange={handleChange}
                    className="absolute w-[480px] h-[45px] top-[43px] left-0 bg-greyish rounded-lg border border-solid border-dark-grey"
                  />
                </div>
              </div>

              <div className="flex flex-col w-[480px] items-start gap-[41px] relative">
                <div className="gap-[18px] self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
                  <label className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Pet Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="Enter what type of pet it is e.g. cat, dog, rabbit"
                    value={petDetails.type}
                    onChange={handleChange}
                    className="flex h-[45px] items-center px-3.5 py-3 relative self-stretch w-full bg-greyish rounded-lg border border-solid border-dark-grey"
                  />
                </div>

                <div className="w-[323px] gap-[15px] flex flex-col items-start relative flex-[0_0_auto]">
                  <label className="relative self-stretch mt-[-1.00px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#38618d] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    Pet’s Gender
                  </label>
                  <div className="flex items-center gap-[71px] relative self-stretch w-full flex-[0_0_auto]">
                    <label className="inline-flex items-center gap-[22px] relative flex-[0_0_auto]">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={petDetails.gender === "male"}
                        onChange={handleChange}
                        className="w-5 h-5"
                      />
                      <span className="relative w-fit font-body font-[number:var(--body-font-weight)] text-variable-collection-primary-color text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                        Male
                      </span>
                    </label>
                    <label className="inline-flex items-center gap-[22px] relative flex-[0_0_auto]">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={petDetails.gender === "female"}
                        onChange={handleChange}
                        className="w-5 h-5"
                      />
                      <span className="relative w-fit font-body font-[number:var(--body-font-weight)] text-variable-collection-primary-color text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                        Female
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative self-stretch w-full h-[58px]">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#84c1ad] text-white font-semibold py-2 px-4 rounded-lg w-full"
              >
                {loading ? "Adding Pet..." : "Add Pet"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
