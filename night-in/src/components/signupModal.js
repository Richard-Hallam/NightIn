import React from "react";
import * as Survey from "survey-react"; // Import SurveyJS library
import "survey-react/survey.css"; // Import SurveyJS CSS

function SignupModal() {
  // Define the survey JSON structure
  const surveyJson = {
    elements: [
      {
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
      },
      {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
      }
    ]
  };

  // Render SurveyJS component with the defined survey JSON
  return (
    <div>
      <h2>Survey</h2>
      <Survey.Survey json={surveyJson} />
    </div>
  );
}

export default SignupModal;
