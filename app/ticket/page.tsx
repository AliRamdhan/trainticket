"use client";
import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { TicketTables } from "@/components/Tables/TicketTables";
import Link from "next/link";
import { Tickets } from "@/commont.type";
import { getAllTickets } from "../../helper/api-service";
const Page = () => {
  const [tickets, setTickets] = useState<Tickets[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const tickets = await getAllTickets();
      setTickets(tickets);
    };
    fetchData();
  }, []);
  return (
    <section className="w-full px-16">
      <div className="w-full px-8 py-12 bg-gray-800">
        <p className="text-2xl font-medium">Ticket</p>
      </div>
      <div className="w-full mt-8">
        <div className="w-full flex justify-end">
          <Link href={`/ticket/create`}>
            <Button>
              Ticket User
              <HiPlus className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="w-full mt-4">
          <TicketTables tickets={tickets} />
        </div>
      </div>
    </section>
  );
};

export default Page;
