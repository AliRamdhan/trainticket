import { Order } from "@/commont.type";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";
import { FaArrowRight, FaTrain } from "react-icons/fa";
export function OrderTables({ orders }: { orders: Order[] }) {
  return (
    <div className="overflow-x-auto mt-4">
      <Table>
        <TableHead>
          <TableHeadCell>Order Number</TableHeadCell>
          <TableHeadCell>Passenger </TableHeadCell>
          <TableHeadCell>Ticket</TableHeadCell>
          <TableHeadCell>Seat</TableHeadCell>
          <TableHeadCell>Order by User</TableHeadCell>
          <TableHeadCell>Order Status</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {orders.map((order) => (
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {order.OrderNumber}
              </TableCell>
              <TableCell>
                <ul>
                  <li>
                    <p>Name : {order.OrderPassengerName}</p>
                  </li>
                  <li>
                    <p>Number Hp : {order.OrderHpNumber}</p>
                  </li>
                  <li>
                    <p>Residence Number : {order.OrderResidenceNumber}</p>
                  </li>
                </ul>
              </TableCell>
              <TableCell>{order.Ticket.TicketTrain}</TableCell>
              <TableCell>{order.Seat.SeatNumber}</TableCell>
              <TableCell>{order.User.username}</TableCell>
              <TableCell>{order.OrderTicketStatus}</TableCell>
              <TableCell>
                <Link
                  href={`/order/${order.OrderId}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 p-1 border border-black"
                >
                  Edit
                </Link>
                <Link
                  href={`/order/${order.OrderId}`}
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
