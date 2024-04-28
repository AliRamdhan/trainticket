import React from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";

const Page = () => {
  
  return (
    <section className="w-full flex flex-col justify-center items-center text-white">
      <form className="w-4/5 flex flex-col gap-4">
        <div className="w-full">
          <div>
            <div className="mb-2 block">
              <Label value="Code Number" className="text-white" />
            </div>
            <TextInput
              type="text"
              placeholder="Passenger Name"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Passenger Amount" className="text-white" />
            </div>
            <TextInput
              type="text"
              placeholder="Passenger Amount"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="HP Number" className="text-white" />
            </div>
            <TextInput type="text" placeholder="HP Number" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Residence Number" className="text-white" />
            </div>
            <TextInput
              type="text"
              placeholder="Residence Number"
              required
              shadow
            />
          </div>
        </div>
        <Button className="mt-8" type="submit">
          Create Seat
        </Button>
      </form>
    </section>
  );
};

export default Page;
