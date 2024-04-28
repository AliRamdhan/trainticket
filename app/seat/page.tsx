"use client";

import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import Link from "next/link";
import { SeatTables } from "@/components/Tables/SeatTables";
import { Seat } from "@/commont.type";
import { getAllSeats } from "../../helper/api-service";

const Page = () => {
  const [seats, setSeats] = useState<Seat[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const seats = await getAllSeats();
      setSeats(seats);
    };
    fetchData();
  }, []);
  return (
    <section className="w-full px-16">
      <div className="w-full px-8 py-12 bg-gray-800">
        <p className="text-2xl font-medium">Seat</p>
      </div>
      <div className="w-full mt-8">
        <div className="w-full flex justify-end">
          <Link href={`/seat/create`}>
            <Button>
              Seat Ticket
              <HiPlus className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="w-full mt-4">
          <SeatTables seats={seats} />
        </div>
      </div>
    </section>
  );
};

export default Page;
