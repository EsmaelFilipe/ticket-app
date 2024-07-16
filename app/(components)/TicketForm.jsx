"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const TicketForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "open",
    category: "Development",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/Tickets", { formData: formData });
      console.log("Tickets created", res.data);
    } catch (error) {
      console.log("Error creating tickets", error);
      setError("Failed to create tickets. Please try again later", error);
    }

    // const res = await fetch("/api/Tickets", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ formData }),
    // });
    // if (!res.ok) {
    //   throw new Error("failed to create tickets");
    // }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
        <h3>Create your ticket</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          required
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          required
          onChange={handleChange}
          rows="5"
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Software Problem">Software Problem</option>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Network Problem">Network Problem</option>
        </select>

        <label htmlFor="priority">Priority</label>
        <div>
          {[1, 2, 3, 4, 5].map((priority) => (
            <div key={priority}>
              <input
                type="radio"
                id={`priority-${priority}`}
                name="priority"
                value={priority}
                checked={formData.priority == priority}
                onChange={handleChange}
              />
              <label htmlFor={`priority-${priority}`}>{priority}</label>
            </div>
          ))}
        </div>

        <label htmlFor="progress">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
