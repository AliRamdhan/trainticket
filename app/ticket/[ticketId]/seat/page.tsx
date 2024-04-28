"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Seat } from "@/commont.type";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { getAllSeatsByTicketId } from "@/helper/api-service";
import { SeatTicket } from "@/app/ticket/components/SeatTicket";

const Page = ({ params }: { params: { ticketId: string } }) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const ticketId = params.ticketId;
  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);
      try {
        const seats = await getAllSeatsByTicketId({ ticketId: ticketId });
        setSeats(seats);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fecthData();
  }, [ticketId]); // Ensure that ticketId is listed as a dependency

  return (
    <section className="w-full px-16">
      <div className="w-full px-8 py-12 bg-gray-800">
        <p className="text-2xl font-medium">Seat Ticket</p>
      </div>
      <div className="w-full mt-8">
        <div className="w-full flex justify-end">
          <Link href={`/ticket/${ticketId}/seat/create`}>
            <Button>
              Seat
              <HiPlus className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="w-full mt-4">
          {loading ? <p>Loading...</p> : <SeatTicket seats={seats} />}
        </div>
      </div>
    </section>
  );
};

export default Page;
