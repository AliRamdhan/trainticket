"use client"
import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { PaymentTables } from "@/components/Tables/PaymentTables";
import { getAllPayments } from "@/helper/api-service";
import { Payment } from "@/commont.type";
const Page = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const payments = await getAllPayments();

      setPayments(payments);
    };
    fetchData();
  }, []);
  return (
    <section className="w-full px-16">
      <div className="w-full px-8 py-12 bg-gray-800">
        <p className="text-2xl font-medium">Payment DATA</p>
      </div>
      <div className="w-full mt-8">
        {/* <div className="w-full flex justify-end">
          <Button>
            Payment
            <HiPlus className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
        <div className="w-full mt-4">
          <PaymentTables payments={payments} />
        </div>
      </div>
    </section>
  );
};

export default Page;
