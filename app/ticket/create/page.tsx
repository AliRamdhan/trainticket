"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { CreatTicketTrains } from "@/helper/api-service";
import { TicketForm } from "@/commont.type";
const Page = () => {
  const [ticketForm, setTicketForm] = useState<TicketForm>({
    TicketTrain: "",
    TicketFromCity: "",
    TicketToCity: "",
    TicketClass: "",
    TicketPrice: "",
    TicketDate: "",
    TicketDeparture: "",
    TicketArrived: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTicketForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await CreatTicketTrains(ticketForm);
      if (response) {
        alert("Ticket created successfully");
        console.log("Ticket created successfully:", response);
      }
      // Reset form after successful submission if needed
      setTicketForm({
        TicketTrain: "",
        TicketFromCity: "",
        TicketToCity: "",
        TicketClass: "",
        TicketPrice: "",
        TicketDate: "",
        TicketDeparture: "",
        TicketArrived: "",
      });
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };
  return (
    <section className="w-full flex flex-col justify-center items-center text-white">
      <form onSubmit={handleSubmit} className="w-4/5 flex flex-col gap-4">
        <div className="w-full flex justify-between gap-2">
          <div className="w-full">
            <div>
              <div className="mb-2 block">
                <Label value="Ticket Train" className="text-white" />
              </div>
              <TextInput
                type="text"
                name="TicketTrain"
                value={ticketForm.TicketTrain}
                onChange={handleInputChange}
                placeholder="Train Ticket"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Ticket Class" className="text-white" />
              </div>
              <TextInput
                type="text"
                name="TicketClass"
                value={ticketForm.TicketClass}
                onChange={handleInputChange}
                placeholder="Train Class"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Ticket Price" className="text-white" />
              </div>
              <TextInput
                type="text"
                name="TicketPrice"
                value={ticketForm.TicketPrice}
                onChange={handleInputChange}
                placeholder="Train Price"
                required
                shadow
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <div className="mb-2 block">
                <Label value="Departure Time" className="text-white" />
              </div>
              <TextInput
                type="text"
                name="TicketDeparture"
                value={ticketForm.TicketDeparture}
                onChange={handleInputChange}
                placeholder="Train Derparture Time"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Arrive Time" className="text-white" />
                <TextInput
                  type="text"
                  name="TicketArrived"
                  value={ticketForm.TicketArrived}
                  onChange={handleInputChange}
                  placeholder="Train Arrived Time"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Departure City" className="text-white" />
                </div>
                <TextInput
                  type="text"
                  name="TicketFromCity"
                  value={ticketForm.TicketFromCity}
                  onChange={handleInputChange}
                  placeholder="Train Derparture City"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Arrive City" className="text-white" />
                </div>
                <TextInput
                  type="text"
                  name="TicketToCity"
                  value={ticketForm.TicketToCity}
                  onChange={handleInputChange}
                  placeholder="Train Arrive City"
                  required
                  shadow
                />
              </div>
            </div>
          </div>
        </div>
        <Button type="submit">Create Ticket</Button>
      </form>
    </section>
  );
};

export default Page;
