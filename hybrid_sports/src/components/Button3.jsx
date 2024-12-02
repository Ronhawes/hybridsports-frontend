import React, { useState } from "react";

const TicketRegistration = ({ additionalClasses = "" }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    idNo: "",
    phoneNo: "",
    gender: "",
    country: "",
    physicalCondition: "",
    price: 2000,
    ticketCount: 1,
  });
  const [result, setResult] = useState("");
  const [mpesaPaymentSuccess, setMpesaPaymentSuccess] = useState(false);

  const handleExit = () => {
    setShowForm(false);
    setFormData({
      fullName: "",
      email: "",
      idNo: "",
      phoneNo: "",
      gender: "",
      country: "",
      physicalCondition: "",
      price: 2000,
      ticketCount: 1,
    });
    setMpesaPaymentSuccess(false);
    setResult("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTicketCountChange = (change) => {
    setFormData((prevState) => {
      const newTicketCount = Math.max(1, Math.min(5, prevState.ticketCount + change));
      return {
        ...prevState,
        ticketCount: newTicketCount,
        price: newTicketCount * 2000,
      };
    });
  };

  const validateForm = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.idNo &&
      formData.phoneNo &&
      formData.gender &&
      formData.country &&
      formData.physicalCondition &&
      formData.price
    );
  };

  const onSubmitFullDetails = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setResult("Please fill in all the required fields.");
      return;
    }

    if (!mpesaPaymentSuccess) {
      setResult("Please complete the Mpesa payment first.");
      return;
    }

    setResult("Sending...");

    try {
      const apiUrl = "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/tickets/add";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResult("Registration successful!");
        handleExit();
      } else {
        const data = await response.json();
        setResult(`Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again later.");
    }
  };

  const onSubmitPhoneAndPrice = async () => {
    setResult("Initiating payment...");

    const { phoneNo, price } = formData;
    const payload = { phoneNo, price };

    try {
      const apiUrl = "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/tickets/stk";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setResult("Payment initiation successful!");
        setMpesaPaymentSuccess(true); // Set payment success flag
      } else {
        const data = await response.json();
        setResult(`Error: ${data.message || "Something went wrong"}`);
        setMpesaPaymentSuccess(false);
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      setResult("Error initiating payment. Please try again later.");
      setMpesaPaymentSuccess(false);
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <>
      <button
        type="button"
        className={`fixed bottom-4 py-4 px-6 font-poppins font-medium text-[18px] border border-blue-800 bg-dimWhite rounded-[10px] hover:text-blue-800 outline-none ${additionalClasses}`}
        onClick={handleShowForm}
      >
        Register a Ticket
      </button>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-transparent p-5 rounded shadow-md w-full max-w-lg mx-4 mt-8 max-h-[80vh] overflow-y-auto">
            <form onSubmit={onSubmitFullDetails}>
              <h2 className="font-poppins font-semibold text-[32px] text-white leading-[40px] w-full">
                Register for Tickets
              </h2>
              <p className="mt-4 text-white p-2 rounded">Please fill in the details below</p>

              {/* Form Fields */}
              <label className="mt-4 text-white p-2 rounded">* Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-white border p-2 mb-4 w-full"
                required
              />

              <label className="mt-4 text-white p-2 rounded">* Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white border p-2 mb-4 w-full"
                required
              />

              <label className="mt-4 text-white p-2 rounded">* ID Number:</label>
              <input
                type="text"
                name="idNo"
                value={formData.idNo}
                onChange={handleChange}
                className="bg-white border p-2 mb-4 w-full"
                required
              />

              <label className="mt-4 text-white p-2 rounded">* Phone No:</label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="bg-white border p-2 mb-4 w-full"
                required
              />

              <label className="mt-4 text-white p-2 rounded">* Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="bg-white border p-2 mb-4 w-full"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label className="mt-4 text-white p-2 rounded">* Country:</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="bg-white border p-2 mb-4 w-full"
                required
              />

              <label className="mt-4 text-white p-2 rounded">* Physical Condition:</label>
              <select
                name="physicalCondition"
                value={formData.physicalCondition}
                onChange={handleChange}
                className="bg-white border p-2 mb-4 w-full"
                required
              >
                <option value="">Select Condition</option>
                <option value="Disabled">Disabled</option>
                <option value="Not Disabled">Not Disabled</option>
              </select>

              <label className="mt-4 text-white p-2 rounded">
                Purchase up to 5 tickets each @ Ksh 2000:
              </label>
              <div className="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => handleTicketCountChange(-1)}
                  className="bg-gray-500 text-white px-2 rounded-l"
                  disabled={formData.ticketCount === 1}
                >
                  -
                </button>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  className="bg-gray-200 border px-4 py-2 w-full text-center"
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => handleTicketCountChange(1)}
                  className="bg-gray-500 text-white px-2 rounded-r"
                  disabled={formData.ticketCount === 5}
                >
                  +
                </button>
              </div>

              {/* Payment Button */}
              <button
                type="button"
                onClick={onSubmitPhoneAndPrice}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Make Mpesa Payment
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className={`mt-4 bg-green-500 text-white py-2 px-4 rounded ${
                  !mpesaPaymentSuccess ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!mpesaPaymentSuccess} // Button disabled if payment not successful
              >
                Submit
              </button>

              {result && <p className="mt-4 text-white">{result}</p>}

              <button
                type="button"
                onClick={handleExit}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              >
                Exit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketRegistration;
