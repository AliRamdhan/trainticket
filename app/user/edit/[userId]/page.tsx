"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { UserForm, Roles } from "@/commont.type";
import { getUserById, UpdateUserData, getAllRoles } from "@/helper/api-service";

const Page = ({ params }: { params: { userId: string } }) => {
  // const [tickets, setTickets] = useState<Tickets>();
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);
  const [roles, setRoles] = useState<Roles[]>([]);
  const [userForm, setUserForm] = useState<UserForm>({
    username: " ",
    email: " ",
    password: " ",
    roleuser: 0,
  });
  const userId = params.userId;
  useEffect(() => {
    const fetchData = async () => {
      const users = await getUserById({
        userId: userId,
      });
      const roles = await getAllRoles();
      setRoles(roles);
      //setusers(users);
      setUserForm((prevForm) => ({
        ...prevForm,
        username: users.username || "",
        email: users.email || "",
        password: users.password,
        roleuser: users.roleuser || 0,
      }));
    };
    fetchData();
  }, [userId]);
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // If the name is SeatTicket, parse the value to integer before updating state
    const updatedValue = name === "roleuser" ? parseInt(value) : value;

    setUserForm((prevForm) => ({
      ...prevForm,
      [name]: updatedValue,
    }));
  };
  const handleSubmitUpdate = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await UpdateUserData(userForm, userId);
      if (response) {
        alert("Ticket updated successfully");
        setUpdateSuccess(true);
        console.log("Ticket updated successfully:", response);
      }
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };
  // useEffect(() => {
  //   if (updateSuccess) {
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 2000); // Reload after 2 seconds
  //   }
  // }, [updateSuccess]);
  return (
    <section className="w-full flex flex-col justify-center items-center text-white">
      <form className="w-4/5 flex flex-col gap-4" onSubmit={handleSubmitUpdate}>
        <div className="w-full flex justify-between gap-2">
          <div className="w-full">
            <div>
              <div className="mb-2 block">
                <Label value="Username" className="text-white" />
              </div>
              <TextInput
                type="text"
                name="username"
                value={userForm.username}
                placeholder="Username"
                onChange={handleInputChange}
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Email" className="text-white" />
              </div>
              <TextInput
                type="text"
                name="email"
                placeholder="Email"
                value={userForm.email}
                onChange={handleInputChange}
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Role User" className="text-white" />
              </div>
              <Select
                id="tickets"
                required
                name="roleuser" // Updated name attribute
                className="text-black"
                value={userForm.roleuser}
                onChange={handleInputChange}
              >
                {roles ? (
                  roles.map((role) => (
                    <option value={role.RoleID}>{role.Name}</option>
                  ))
                ) : (
                  <option className="text-black">Loading....</option>
                )}
              </Select>
            </div>
          </div>
        </div>
        <Button type="submit">Edit User</Button>
      </form>
    </section>
  );
};

export default Page;
