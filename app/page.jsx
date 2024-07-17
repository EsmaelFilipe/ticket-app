import React from "react";
import TicketCard from "./(components)/TicketCard";
const getTickets = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
  } catch (error) {
    console.log("Error getting tickets", error);
  }
};

const Dashboard = async () => {
  // const { tickets } = await getTickets();
  return (
    <div className="p-5 ">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
