"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { Tickets, SeatForm } from "@/commont.type";
import { CreatSeatTicket, getAllTickets } from "@/helper/api-service";

const Page = () => {
  const [tickets, setTickets] = useState<Tickets[]>([]);
  const [seatForm, setSeatForm] = useState<SeatForm>({
    SeatNumber: "",
    SeatTicket: 0,
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // If the name is SeatTicket, parse the value to integer before updating state
    const updatedValue = name === "SeatTicket" ? parseInt(value) : value;

    setSeatForm((prevForm) => ({
      ...prevForm,
      [name]: updatedValue,
    }));
    // setSeatForm((prevForm) => ({
    //   ...prevForm,
    //   [name]: value,
    // }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await CreatSeatTicket(seatForm);
      if (response) {
        alert("succes created");
        setSeatForm({
          SeatNumber: "",
          SeatTicket: 0,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tickets = await getAllTickets();
        setTickets(tickets);
        console.log(tickets);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="w-full flex flex-col justify-center items-center text-white">
      <form className="w-4/5 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-full flex justify-between gap-2">
          <div className="w-full">
            <div>
              <div className="mb-2 block">
                <Label value="Seat Number" className="text-white" />
              </div>
              <TextInput
                type="text"
                placeholder="Seat Number"
                name="SeatNumber"
                value={seatForm.SeatNumber}
                onChange={handleInputChange}
                required
                shadow
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="countries"
                  value="Select Ticket"
                  className="text-white"
                />
              </div>
              <Select
                id="tickets"
                required
                name="SeatTicket"
                className="text-black"
                onChange={handleInputChange}
              >
                {tickets ? (
                  tickets.map((ticket) => (
                    <option value={ticket.TicketId}>{ticket.TicketId}</option>
                  ))
                ) : (
                  <option className="text-black">Loading....</option>
                )}
              </Select>
            </div>
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
