import axios from "axios";
import { TicketForm, SeatForm, UserForm } from "../commont.type";

const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Tickets
export const getAllTickets = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/tickets/all`);
    return response.data.Tickets;
  } catch (error) {
    return error;
  }
};

export const getDetailsTicket = async ({ ticketId }: { ticketId: string }) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/tickets/${ticketId}`);
    return response.data.Tickets;
  } catch (error) {
    return error;
  }
};

export const CreatTicketTrains = async ({
  TicketTrain,
  TicketFromCity,
  TicketToCity,
  TicketClass,
  TicketPrice,
  TicketDate,
  TicketDeparture,
  TicketArrived,
}: TicketForm) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/tickets/create`, {
      TicketTrain: TicketTrain,
      TicketFromCity: TicketFromCity,
      TicketToCity: TicketToCity,
      TicketClass: TicketClass,
      TicketPrice: TicketPrice,
      TicketDate: TicketDate,
      TicketDeparture: TicketDeparture,
      TicketArrived: TicketArrived,
    });
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const UpdateTicketTrains = async (
  updatedTicket: TicketForm,
  ticketId: string
) => {
  try {
    const response = await axios.put(
      `${apiBaseUrl}/tickets/update/${ticketId}`,
      updatedTicket
    );
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

//Order
export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/orders/all`);
    return response.data.Orders;
  } catch (error) {
    return error;
  }
};

// Seat
export const getAllSeats = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/seats/all`);
    return response.data.Seats;
  } catch (error) {
    return error;
  }
};

export const getAllSeatsByTicketId = async ({
  ticketId,
}: {
  ticketId: string;
}) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/seats/all/${ticketId}`);
    return response.data.seats;
  } catch (error) {
    return error;
  }
};
export const CreatSeatTicket = async (ticket: SeatForm) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/seats/create`, ticket);
    return response;
  } catch (error) {
    return error;
  }
};
export const UpdateSeatTicket = async (
  updatedTicket: SeatForm,
  seatId: string
) => {
  try {
    const response = await axios.put(
      `${apiBaseUrl}/seats/update/${seatId}`,
      updatedTicket
    );
    return response;
  } catch (error) {
    return error;
  }
};

//User
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/user/all`);
    return response.data.users;
  } catch (error) {
    return error;
  }
};

export const getUserById = async ({ userId }: { userId: string }) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/user/${userId}`);
    return response.data.users;
  } catch (error) {
    return error;
  }
};

export const UpdateUserData = async (updateUser: UserForm, userId: string) => {
  try {
    const response = await axios.put(
      `${apiBaseUrl}/user/update/${userId}`,
      updateUser
    );
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

//Payments
export const getAllPayments = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/payment/all`);
    return response.data.Payments;
  } catch (error) {
    return error;
  }
};


// Rle 
export const getAllRoles = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/role/all`);
    return response.data.roles;
  } catch (error) {
    return error;
  }
};