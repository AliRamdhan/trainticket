"use client";
import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { OrderTables } from "@/components/Tables/OrderTables";
import Link from "next/link";
import { getAllOrders } from "@/helper/api-service";
import { Order } from "@/commont.type";

const Page = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const orders = await getAllOrders();
      setOrders(orders);
    };
    fetchData();
  }, []);
  return (
    <section className="w-full px-16">
      <div className="w-full px-8 py-12 bg-gray-800">
        <p className="text-2xl font-medium">Order DATA</p>
      </div>
      <div className="w-full mt-8">
        {/* <div className="w-full flex justify-end">
          <Link href={`/order/create`}>
            <Button>
              Order
              <HiPlus className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div> */}
        <div className="w-full mt-4">
          <OrderTables orders={orders} />
        </div>
      </div>
    </section>
  );
};

export default Page;
