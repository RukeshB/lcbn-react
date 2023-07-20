import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

const MemberForm = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phone: "",
  });

  const changeHandler = (event) => {
    let id = event.target.id;
    let value = event.target.value;

    setInputs((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        MemberShip Form
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details.
      </Typography>
      <form
        className="mt-8 mb-2 w-64 md:w-[26rem] max-w-screen-lg"
        onSubmit={submitHandler}
      >
        <div className="mb-4 flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:flex-row md:gap-1 w-full">
            <Input
              label="First Name"
              id="first_name"
              onChange={changeHandler}
            />
            <Input label="Last Name" id="last_name" onChange={changeHandler} />
          </div>
          <Input label="Email" id="email" onChange={changeHandler} />
          <Input label="Phone Number" id="phone" onChange={changeHandler} />
          <Input label="Address" id="address" onChange={changeHandler} />
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default MemberForm;
