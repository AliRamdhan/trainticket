"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { getDetailsTicket, UpdateTicketTrains } from "@/helper/api-service";
import { Tickets, TicketForm } from "@/commont.type";

const Page = ({ params }: { params: { ticketId: string } }) => {
  // const [tickets, setTickets] = useState<Tickets>();
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);
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
  const ticketId = params.ticketId;
  useEffect(() => {
    const fetchData = async () => {
      const tickets = await getDetailsTicket({
        ticketId: ticketId,
      });
      //setTickets(tickets);
      setTicketForm((prevForm) => ({
        ...prevForm,
        TicketTrain: tickets.TicketTrain || "",
        TicketFromCity: tickets.TicketFromCity || "",
        TicketToCity: tickets.TicketToCity || "",
        TicketClass: tickets.TicketClass || "",
        TicketPrice: tickets.TicketPrice || "",
        TicketDate: tickets.TicketDate || "",
        TicketDeparture: tickets.TicketDeparture || "",
        TicketArrived: tickets.TicketArrived || "",
      }));
    };
    fetchData();
  }, [ticketId]);
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTicketForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmitUpdate = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await UpdateTicketTrains(ticketForm, ticketId);
      if (response) {
        alert("Ticket updated successfully");
        setUpdateSuccess(true);
        console.log("Ticket updated successfully:", response);
      }
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };
  useEffect(() => {
    if (updateSuccess) {
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Reload after 2 seconds
    }
  }, [updateSuccess]);
  return (
    <section className="w-full flex flex-col justify-center items-center text-white">
      {ticketForm ? (
        updateSuccess ? (
          <p>Updated data successfully. Reloading...</p>
        ) : (
          <form
            className="w-4/5 flex flex-col gap-4"
            onSubmit={handleSubmitUpdate}
          >
            <div className="w-full flex justify-between gap-2">
              <div className="w-full">
                <div>
                  <div className="mb-2 block">
                    <Label value="Ticket Train" className="text-white" />
                  </div>
                  <TextInput
                    type="text"
                    placeholder="Ticket Train"
                    name="TicketTrain"
                    value={ticketForm.TicketTrain}
                    onChange={handleInputChange}
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
            <Button type="submit">Edit Ticket</Button>
          </form>
        )
      ) : (
        <p>Loading .....</p>
      )}
    </section>
  );
};

export default Page;
