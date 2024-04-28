import { Payment } from "@/commont.type";
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
export function PaymentTables({ payments }: { payments: Payment[] }) {
  return (
    <div className="overflow-x-auto mt-4">
      <Table>
        <TableHead>
          <TableHeadCell>Payment Code</TableHeadCell>
          <TableHeadCell>Total</TableHeadCell>
          <TableHeadCell>Method</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Seat & Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {payments.map((payment) => (
            <TableRow
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={payment.PaymentId}
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                KAI{payment.PaymentCode}
              </TableCell>
              <TableCell>{payment.PaymentTotal}</TableCell>
              <TableCell>{payment.PaymentMethod}</TableCell>
              <TableCell>{payment.PaymentMethod}</TableCell>

              <TableCell>
                <Link
                  href={`/payment/edit/${payment.PaymentId}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 p-1 border broder-black"
                >
                  Edit
                </Link>
                <Link
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 ml-3 p-1 border broder-black"
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
