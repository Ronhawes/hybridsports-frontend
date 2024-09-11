import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { court } from "../assets"; // Ensure this imports your court image correctly

const Button = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCourtImage, setShowCourtImage] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    email: '',
    phoneNumber: '',
    mpesaPhoneNumber: '',
    paymentMethod: '',
  });
  const [ticketCount, setTicketCount] = useState(1);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [wantsOffers, setWantsOffers] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const TICKET_PRICE = 2000;

  const formRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showForm);
    return () => document.body.classList.remove('no-scroll');
  }, [showForm]);

  const handleSubmit = () => {
    const errors = {};
    if (!formData.paymentMethod) errors.paymentMethod = "Please select a payment method.";
    if (formData.paymentMethod === 'mpesa' && !formData.mpesaPhoneNumber) errors.mpesaPhoneNumber = "Please enter your Mpesa phone number.";
    if (!agreedToTerms) errors.agreedToTerms = "Please agree to the Terms and Conditions.";
    
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    alert("Ticket purchased successfully!");
    setShowForm(false);
  };

  const handleExit = () => {
    setShowCourtImage(false);
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'terms') setAgreedToTerms(checked);
    if (name === 'offers') setWantsOffers(checked);
  };

  const scrollTo = (position) => {
    if (formRef.current) {
      formRef.current.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  const increaseTicketCount = () => {
    if (ticketCount < 5) setTicketCount(ticketCount + 1);
  };

  const decreaseTicketCount = () => {
    if (ticketCount > 1) setTicketCount(ticketCount - 1);
  };

  const totalPrice = ticketCount * TICKET_PRICE;

  return (
    <>
      <div>
        <button
          type="button"
          className="py-2 px-4 font-poppins font-medium text-[16px] text-blue-300 bg-transparent rounded-[10px] border border-blue-950 outline-none block flex items-center"
          onClick={() => setShowCourtImage(prev => !prev)}
        >
          <span className="flex items-center">
            {showCourtImage ? 'Hide Court' : 'Book a ticket'}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 transform rotate-45" />
          </span>
        </button>
      </div>

      {showCourtImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-black text-white p-5 rounded shadow-md relative w-full h-full max-w-4xl">
            <button
              type="button"
              onClick={handleExit}
              className="absolute top-2 right-2 bg-gray-600 text-white p-2 rounded-full"
              style={{ zIndex: 10 }}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>

            <form
              className="bg-transparent rounded shadow-md p-5 flex flex-col h-full overflow-y-auto"
              onSubmit={(e) => e.preventDefault()}
              ref={formRef}
            >
              <h2 className="font-poppins font-semibold text-[24px] text-white">Book Your Ticket</h2>

              <label className="mt-4 text-white">Full names:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-black border p-2 mb-4 w-full text-white"
                required
              />
              {formErrors.fullName && <p className="text-red-500">{formErrors.fullName}</p>}

              <label className="mt-4 text-white">ID Number:</label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                className="bg-black border p-2 mb-4 w-full text-white"
                required
              />
              {formErrors.idNumber && <p className="text-red-500">{formErrors.idNumber}</p>}

              <label className="mt-4 text-white">Email Address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black border p-2 mb-4 w-full text-white"
                required
              />
              {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

              <label className="mt-4 text-white">Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-black border p-2 mb-4 w-full text-white"
                required
              />
              {formErrors.phoneNumber && <p className="text-red-500">{formErrors.phoneNumber}</p>}

              <label className="mt-4 text-white">Payment Method:</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="bg-black border p-2 mb-4 w-full text-white"
                required
              >
                <option value="">Select a payment method</option>
                <option value="mpesa">Mpesa</option>
                <option value="credit_card">Credit Card</option>
              </select>
              {formErrors.paymentMethod && <p className="text-red-500">{formErrors.paymentMethod}</p>}

              {formData.paymentMethod === 'mpesa' && (
                <>
                  <label className="mt-4 text-white">Mpesa Phone Number:</label>
                  <input
                    type="text"
                    name="mpesaPhoneNumber"
                    value={formData.mpesaPhoneNumber}
                    onChange={handleChange}
                    className="bg-black border p-2 mb-4 w-full text-white"
                    required
                  />
                  {formErrors.mpesaPhoneNumber && <p className="text-red-500">{formErrors.mpesaPhoneNumber}</p>}
                </>
              )}

              <div className="mt-4 text-white">
                <label>
                  <input
                    type="checkbox"
                    name="terms"
                    checked={agreedToTerms}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  I agree to the Terms and Conditions
                </label>
                {formErrors.agreedToTerms && <p className="text-red-500">{formErrors.agreedToTerms}</p>}
              </div>

              <div className="mt-4 text-white">
                <label>
                  <input
                    type="checkbox"
                    name="offers"
                    checked={wantsOffers}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  I want to receive updates and special offers
                </label>
              </div>

              <div className="mt-4 text-white flex items-center">
                <button
                  type="button"
                  className="bg-blue-500 text-white py-1 px-4 rounded mr-2"
                  onClick={decreaseTicketCount}
                >
                  -
                </button>
                <span>{ticketCount}</span>
                <button
                  type="button"
                  className="bg-blue-500 text-white py-1 px-4 rounded ml-2"
                  onClick={increaseTicketCount}
                >
                  +
                </button>
              </div>

              <div className="mt-4 text-white">
                Total Price: {totalPrice} KSh
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  onClick={handleExit}
                  className="bg-gray-600 text-white py-2 px-4 rounded"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
