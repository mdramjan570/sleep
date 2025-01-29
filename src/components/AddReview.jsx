import { Button, Form, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CustomerReview from "./CustomerReview";
const AddReview = () => {
  const [submitted, setSubmitted] = React.useState(null);
  const [recaptchaStatus, setRecaptchaStatus] = useState(false);
  const [recaptchaKey, setRecaptchaKey] = useState("");
  const onSubmit = () => {
    e.preventDefault();

    // Get form data as an object.
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Submit data to your backend API.
    setSubmitted(data);
  };

  const onSuccess = (key) => {
    setRecaptchaStatus(true);
    setRecaptchaKey(key);
  };

  return (
    <div className="py-5 ">
      <div>
        <h2 className=" text-2xl text-[#112f46] font-bold ">Add a review</h2>
        <p className="font-bold ">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div>
        <p className=" text-2xl text-[#112f46] font-bold pt-4">Your rating</p>

        <CustomerReview />
      </div>
      <div className="pt-4">
        <Form onSubmit={onSubmit} validationBehavior="native" c>
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder=" "
            type="text"
            radius="sm"
            variant="bordered"
          />
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder=" "
            type="email"
            radius="sm"
            variant="bordered"
          />

          <Textarea
            isRequired
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            radius="sm"
            variant="bordered"
          />
          <div className="pt-4 ">
            <ReCAPTCHA
              sitekey="6LdulsUqAAAAAKIvrvYbmURG1D3q-02lWkYoteSY"
              onChange={onSuccess}
            />
            ,
          </div>

          <Button
            className="bg-[#002039] text-white hover:bg-[#E65700]"
            type="submit"
            radius="sm"
            size="lg"
          >
            Submit
          </Button>
          {submitted && (
            <div className="text-small text-default-500">
              You submitted: <code>{JSON.stringify(submitted)}</code>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default AddReview;
