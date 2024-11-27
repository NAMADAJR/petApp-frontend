import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

export const AddPet = () => {
  const [petDetails, setPetDetails] = useState({
    name: "",
    type: "",
    breed: "",
    gender: "",
    dob: "",
    lastWeightCheck: "",
    medicalRecords: "",
    operations: "",
    foodAllergies: "",
    lastVetVisit: "",
    image: null, // New state for image
    caloriesBurned: "",
    dailySteps: "",
  });
  const navigate = useNavigate()

  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setPetDetails((prevDetails) => ({
      ...prevDetails,
      image: e.target.files[0],  // Save the image file
    }));
  };

  const handleCheckboxChange = (e) => {
    setAgreeToTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      setMessage("Please agree to the Terms and Conditions.");
      return;
    }

    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("token");
    // const petData = new FormData(); // Use FormData to handle file upload
    // Object.entries({
    //   ...petDetails,
    //   date_of_birth: petDetails.dob,
    // }).forEach(([key, value]) => {
    //   petData.append(key, value);
    // });

    // // Check if an image is selected
    // if (petDetails.image) {
    //   petData.append("image", petDetails.image);
    // }
    const petData = {
      "name": "Bubbles",
      "type": "Cat",
      "breed": "Golden ",
      "gender": "Male",
      "date_of_birth": "2020-05-15"
    }
    

    try {
      // Add a new pet to the database
      const response = await fetch("https://petapp-backend-abg7.onrender.com/pets", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify(petData),
      });
      console.log(token);

      if (!response.ok) throw new Error("Failed to add pet, please try again")
        else{
      navigate("/overview");
        }
      

      const data = await response.json();
      setMessage("Pet added successfully!");
      setPetDetails({
        name: "",
        type: "",
        breed: "",
        gender: "",
        dob: "",
        lastWeightCheck: "",
        medicalRecords: "",
        operations: "",
        foodAllergies: "",
        lastVetVisit: "",
        image: null,
        caloriesBurned: "",
        dailySteps: "",
      });
      setAgreeToTerms(false);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
       {/* <Navbar /> */}
    <div className="bg-[#deefdf] flex flex-row justify-center w-full">
     
      <div className="bg-[#deefdf] w-[1512px] h-auto pb-10">
        <form
          onSubmit={handleSubmit}
          className="relative w-[1361px] mx-auto mt-[68px] bg-[#ffffff] rounded-[10px] shadow-[0px_1px_3px_#0000001a]"
        >
          <div className="flex flex-col w-[1133px] items-start gap-[33px] mx-auto pt-[72px]">
            <div className="text-[#39628e] text-2xl font-semibold">Add Pet Details</div>
            
            {message && <div className="text-red-500">{message}</div>}

            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-6 w-[480px]">
                <label>
                  Pet’s Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Pet’s Name"
                    value={petDetails.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>

                <label>
                  Pet’s Breed
                  <input
                    type="text"
                    name="breed"
                    placeholder="Breed"
                    value={petDetails.breed}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>

                <label>
                  Date of Birth
                  <input
                    type="date"
                    name="dob"
                    value={petDetails.dob || ""}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>

                <label>
                  Upload Pet Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>

                <label>
                  Calories Burned
                  <input
                    type="text"
                    name="caloriesBurned"
                    placeholder="Calories burned"
                    value={petDetails.caloriesBurned}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>

                <label>
                  Daily Steps
                  <input
                    type="text"
                    name="dailySteps"
                    placeholder="Enter daily steps"
                    value={petDetails.dailySteps}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>
              </div>

              <div className="flex flex-col gap-6 w-[480px]">
                <label>
                  Pet Type
                  <input
                    type="text"
                    name="type"
                    placeholder="Enter pet type (e.g., cat, dog, rabbit)"
                    value={petDetails.type}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>

                <label>
                  Pet’s Gender
                  <div className="flex gap-4">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={petDetails.gender === "male"}
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={petDetails.gender === "female"}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                  </div>
                </label>
              </div>
            </div>

            <div className="text-[#39628e] text-2xl font-semibold mt-10">Add Health Details</div>

            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-6 w-[480px]">
                <label>
                  Last Weight Check
                  <input
                    type="text"
                    name="lastWeightCheck"
                    placeholder="Enter weight details"
                    value={petDetails.lastWeightCheck}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>

                <label>
                  Medical Records
                  <input
                    type="text"
                    name="medicalRecords"
                    placeholder="Vaccinations, medications, etc."
                    value={petDetails.medicalRecords}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>
              </div>

              <div className="flex flex-col gap-6 w-[480px]">
                <label>
                  Operation/Major Procedures
                  <input
                    type="text"
                    name="operations"
                    placeholder="Enter operations/procedures"
                    value={petDetails.operations}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>

                <label>
                  Food Allergies
                  <input
                    type="text"
                    name="foodAllergies"
                    placeholder="Enter food allergies"
                    value={petDetails.foodAllergies}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>

                <label>
                  Last Vet Visit
                  <input
                    type="date"
                    name="lastVetVisit"
                    value={petDetails.lastVetVisit}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300"
                  />
                </label>
              </div>
            </div>

            <label className="flex items-center gap-2 mt-8">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={handleCheckboxChange}
              />
              I agree to Terms and Conditions
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#84c1ad] text-white font-semibold py-3 px-8 rounded-lg mt-6 w-[200px] text-center"
            >
              {loading ? "Adding Pet..." : "Add Pet"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};