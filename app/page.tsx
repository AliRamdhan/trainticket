"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { StatisticCard } from "@/components/Cards/StatisticCard";
import { TicketTables } from "@/components/Tables/TicketTables";
import { OrderTables } from "@/components/Tables/OrderTables";
import { PaymentTables } from "@/components/Tables/PaymentTables";
import { SeatTables } from "@/components/Tables/SeatTables";
import {
  getAllTickets,
  getAllOrders,
  getAllSeats,
  getAllPayments,
  getAllUsers,
} from "@/helper/api-service";
import { Tickets, Order, Seat, Payment, User } from "@/commont.type";
import { UserTables } from "@/components/Tables/UserTables";

export default function Home() {
  const [tickets, setTickets] = useState<Tickets[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const tickets = await getAllTickets();
      const orders = await getAllOrders();
      const seats = await getAllSeats();
      const payments = await getAllPayments();
      const users = await getAllUsers();
      console.log(users);
      setTickets(tickets);
      setOrders(orders);
      setSeats(seats);
      setPayments(payments);
      setUsers(users);
    };
    fetchData();
  }, []);
  return (
    <main className="w-full min-h-screen flex flex-col items-center px-16">
      <section className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatisticCard statsName="Ticket" statsCount={tickets.length} />
        <StatisticCard statsName="Order" statsCount={orders.length} />
        <StatisticCard statsName="Payments" statsCount={payments.length} />
        <StatisticCard statsName="User" statsCount={users.length} />
      </section>
      <section className="w-full mt-8">
        <h2 className="text-xl font-bold">List Ticket</h2>
        <TicketTables tickets={tickets} />
      </section>
      <section className="w-full mt-8">
        <h2 className="text-xl font-bold">List Orders</h2>
        <OrderTables orders={orders} />
      </section>
      <section className="w-full mt-8">
        <h2 className="text-xl font-bold">List Payments</h2>
        <PaymentTables payments={payments} />
      </section>
      <section className="w-full mt-8">
        <h2 className="text-xl font-bold">List Seats</h2>
        <SeatTables seats={seats} />
      </section>
      <section className="w-full mt-8">
        <h2 className="text-xl font-bold">List Users</h2>
        <UserTables users={users} />
      </section>
    </main>
  );
}
