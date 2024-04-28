"use client";
import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import Link from "next/link";
import { User } from "@/commont.type";
import { getAllUsers } from "@/helper/api-service";
import { UserTables } from "@/components/Tables/UserTables";
const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };
    fetchData();
  }, []);
  return (
    <section className="w-full px-16">
      <div className="w-full px-8 py-12 bg-gray-800">
        <p className="text-2xl font-medium">USER DATA</p>
      </div>
      <div className="w-full mt-8">
        <div className="w-full flex justify-end">
          <Link href={`/user/create`}>
            <Button>
              Create User
              <HiPlus className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="w-full mt-4">
          <UserTables users={users} />
        </div>
      </div>
    </section>
  );
};

export default Page;
