import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faBlog,
  faRectangleTimes,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavPage = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faBlog} className="icon" />
        </Link>
        <p className="text-2l text-default-text">esmaelfilipse0804@gmail.com</p>
      </div>
    </nav>
  );
};

export default NavPage;
