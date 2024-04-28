import { User } from "@/commont.type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";
export function UserTables({ users }: { users: User[] }) {
  console.log(users);
  return (
    <div className="overflow-x-auto mt-4">
      <Table>
        <TableHead>
          <TableHeadCell>Username</TableHeadCell>
          <TableHeadCell>Email </TableHeadCell>
          <TableHeadCell>User Status </TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit Delete</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {users.map((user) => (
            <TableRow
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={user.UserID}
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user.username}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.Role.Name}
              </TableCell>
              <TableCell>
                <Link
                  href={`/user/edit/${user.UserID}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 p-1 border border-black"
                >
                  Edit
                </Link>
                <Link
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 ml-3 p-1 border border-black"
                >
                  Delete
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
