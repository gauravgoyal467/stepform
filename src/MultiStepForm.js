import React, { useState } from "react";
import "./App.css";

const MultiStepForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
    },
    address: {
      street: "",
      city: "",
      pinCode: "",
    },
    paymentDetails: {
      cardNumber: "",
      amount: "",
    },
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (stepName, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepName]: {
        ...prevData[stepName],
        [field]: value,
      },
    }));
  };

  const handleNextClick = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevClick = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log(formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="formInputs">
            <input
              type="text"
              placeholder="First Name"
              value={formData.personalDetails.firstName}
              onChange={(e) =>
                handleInputChange(
                  "personalDetails",
                  "firstName",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.personalDetails.lastName}
              onChange={(e) =>
                handleInputChange("personalDetails", "lastName", e.target.value)
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.personalDetails.email}
              onChange={(e) =>
                handleInputChange("personalDetails", "email", e.target.value)
              }
            />
          </div>
        );

      case 2:
        return (
          <div className="formInputs">
            <input
              type="text"
              placeholder="Street"
              value={formData.address.street}
              onChange={(e) =>
                handleInputChange("address", "street", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="City"
              value={formData.address.city}
              onChange={(e) =>
                handleInputChange("address", "city", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="pinCode"
              value={formData.address.pinCode}
              onChange={(e) =>
                handleInputChange("address", "pinCode", e.target.value)
              }
            />
          </div>
        );

      case 3:
        return (
          <div className="formInputs">
            <input
              type="text"
              placeholder="Card Number"
              value={formData.paymentDetails.cardNumber}
              onChange={(e) =>
                handleInputChange(
                  "paymentDetails",
                  "cardNumber",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="amount"
              value={formData.paymentDetails.amount}
              onChange={(e) =>
                handleInputChange("paymentDetails", "amount", e.target.value)
              }
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="multiStepForm">
      <h1>MultiStep Form</h1>
      <form>
        <div className="form">
          {renderStep()}
          <div className="toggleButton">
            {step > 1 && (
              <button type="button" className="btn" onClick={handlePrevClick}>
                Previous
              </button>
            )}
            {step < 3 ? (
              <button type="button" className="btn" onClick={handleNextClick}>
                Next
              </button>
            ) : (
              <button type="button" className="btn" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
      {submitted && (
        <div className="details">
          <div className="individualDetail">
            <h1>Personal Details</h1>
            <span>Name : {formData.personalDetails.firstName +" "+ formData.personalDetails.lastName}</span>
            <span>Email : {formData.personalDetails.email}</span>
          </div>
          <div className="individualDetail">
            <h1>Address</h1>
            <span>Street : {formData.address.street}</span>
            <span>City : {formData.address.city}</span>
            <span>PinCode : {formData.address.pinCode}</span>
          </div>
          <div className="individualDetail">
            <h1>Payment Details</h1>
            <span>CardNumber : {formData.paymentDetails.cardNumber}</span>
            <span>Amount : {formData.paymentDetails.amount}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
