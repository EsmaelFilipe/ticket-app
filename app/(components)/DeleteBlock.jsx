"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/Tickets/${id}`);
      console.log("Ticket deleted successfully", res.data);
      router.refresh();
    } catch (err) {
      console.error("Error deleting ticket", err);
      alert("Failed to delete ticket. Please try again later.");
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
