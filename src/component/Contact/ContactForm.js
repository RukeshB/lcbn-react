import { Button, Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (event) => {
    let id = event.target.id;
    let value = event.target.value;

    setInputs((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const clearInputs = () => {
    setInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    sendDataToAPI();
    clearInputs();
    console.log(inputs);
  };

  const sendDataToAPI = async () => {
    try {
      const url = "https://sheetdb.io/api/v1/47bqu85rg0ngn";

      await axios.post(url, inputs);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <Input
          label="Full Name"
          size="lg"
          id="name"
          onChange={changeHandler}
          value={inputs.name}
        />
      </div>
      <div className="mt-8">
        <Input
          label="Email"
          size="lg"
          id="email"
          onChange={changeHandler}
          value={inputs.email}
        />
      </div>
      <div className="mt-8">
        <Textarea
          label="Message"
          size="lg"
          id="message"
          onChange={changeHandler}
          value={inputs.message}
        />
      </div>
      <div className="mt-8">
        <Button type="submit" className="w-1/2">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
