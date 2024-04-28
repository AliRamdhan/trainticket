import { Button, Card } from "flowbite-react";
import Link from "next/link";
import {
  FaArrowRight,
  FaTrain,
  FaShoppingBag,
  FaWallet,
  FaUserAlt,
} from "react-icons/fa";
interface Statistic {
  statsName: string;
  statsCount: number;
}
export function StatisticCard({ statsName, statsCount }: Statistic) {
  return (
    <Card className="max-w-sm">
      <div className="flex items-center gap-x-4">
        {statsName == "Ticket" ? (
          <FaTrain className="text-black w-6 h-6" />
        ) : statsName == "Order" ? (
          <FaWallet className="text-black w-6 h-6" />
        ) : statsName == "Payments" ? (
          <FaShoppingBag className="text-black w-6 h-6" />
        ) : statsName == "User" ? (
          <FaUserAlt className="text-black w-6 h-6" />
        ) : null}

        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {statsName} Statistics
        </h5>
      </div>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        {statsCount} {statsName}
      </p>
      <Link href={`/${statsName.toLowerCase()}`}>
        <button className="flex items-center px-2 py-2.5 border border-black bg-blue-600 rounded-lg text-xs">
          See Detailss
          <FaArrowRight className="ml-2 h-4 w-4" />
        </button>
      </Link>
    </Card>
  );
}
