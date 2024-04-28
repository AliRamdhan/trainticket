import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";
import { Seat } from "@/commont.type";
export function SeatTicket({ seats }: { seats: Seat[] }) {
  return (
    <div className="overflow-x-auto mt-4">
      <Table>
        <TableHead>
          <TableHeadCell>Seat Number</TableHeadCell>
          <TableHeadCell>Seat Status</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit Delete</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {seats.map((seat) => (
            <TableRow
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={seat.SeatId}
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {seat.SeatNumber}
              </TableCell>
              <TableCell>Available</TableCell>
              <TableCell>
                <Link
                  // href={`/ticket/seat/${seat.SeatId}/edit`}
                  href={`/ticket/${seat.SeatTicket}/seat/edit/${seat.SeatId}`}
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
