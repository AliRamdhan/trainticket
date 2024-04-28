import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Tickets } from "@/commont.type";

export function TicketTables({ tickets }: { tickets: Tickets[] }) {
  return (
    <div className="overflow-x-auto mt-4">
      <Table>
        <TableHead>
          <TableHeadCell>Ticket name</TableHeadCell>
          <TableHeadCell>City</TableHeadCell>
          <TableHeadCell>Class</TableHeadCell>
          <TableHeadCell>Time</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Seat & Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {tickets.map((ticket, index) => (
            <TableRow
              key={index} // Ensure each row has a unique key
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {ticket.TicketTrain}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <p>{ticket.TicketFromCity}</p>
                  <span className="w-2 h-2 -mt-2 mx-1">
                    <FaArrowRight />
                  </span>{" "}
                  <p>{ticket.TicketToCity}</p>
                </div>
              </TableCell>
              <TableCell>{ticket.TicketClass}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div>
                    <p>{ticket.TicketDeparture}</p>
                  </div>
                  <div className="w-2 h-2 -mt-2 mx-1">
                    <FaArrowRight />
                  </div>
                  <div>
                    <p>{ticket.TicketArrived}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{ticket.TicketPrice}</TableCell>
              <TableCell>
                <Link
                  href={`/ticket/${ticket.TicketId}/seat`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-1"
                >
                  Manage Seat
                </Link>
                <Link
                  href={`/ticket/edit/${ticket.TicketId}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 ml-1"
                >
                  Edit
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
