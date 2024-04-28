"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { SeatForm } from "@/commont.type";
import { UpdateSeatTicket } from "@/helper/api-service";

const Page = ({ params }: { params: { ticketId: string; seatId: string } }) => {
  const ticketIdStr = params.ticketId;
  const seatIdStr = params.seatId;
  console.log(seatIdStr);
  const ticketId = parseInt(ticketIdStr);
  const [seatForm, setSeatForm] = useState<SeatForm>({
    SeatNumber: "",
    SeatTicket: ticketId,
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSeatForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmitUpdate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await UpdateSeatTicket(seatForm, seatIdStr);
      if (response) {
        alert("succes updated");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-full flex flex-col justify-center items-center text-white">
      <form className="w-4/5 flex flex-col gap-4" onSubmit={handleSubmitUpdate}>
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
        </div>
        <Button className="mt-8" type="submit">
          Edit Seat
        </Button>
      </form>
    </section>
  );
};

export default Page;
