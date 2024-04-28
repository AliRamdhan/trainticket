import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

const Page = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center text-white">
      <form className="w-4/5 flex flex-col gap-4">
        <div className="w-full flex justify-between gap-2">
          <div className="w-full">
            <div>
              <div className="mb-2 block">
                <Label value="Username" className="text-white" />
              </div>
              <TextInput type="text" placeholder="Username" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Email" className="text-white" />
              </div>
              <TextInput type="text" placeholder="Email" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Password" className="text-white" />
              </div>
              <TextInput type="text" placeholder="Password" required shadow />
            </div>

            <div>
              <div className="mb-2 block">
                <Label value="Role User" className="text-white" />
              </div>
              <TextInput type="text" placeholder="Role User" required shadow />
            </div>
          </div>
        </div>
        <Button type="submit">Create User</Button>
      </form>
    </section>
  );
};

export default Page;
