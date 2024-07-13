"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("form submission");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "open",
    category: "Development",
    active: true,
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create your ticket</h3>
        <label htmlFor="">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          required={true}
          onChange={handleChange}
        />
        <label htmlFor="">Description </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          required={true}
          onChange={handleChange}
          rows="5"
        />

        <label htmlFor="">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Software Problem">Software Problem</option>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Network Problem">Network Problem</option>
        </select>

        <label htmlFor="">Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            value={1}
            checked={formData.priority == 1}
            onChange={handleChange}
          />
          <label>1</label>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            value={2}
            checked={formData.priority == 2}
            onChange={handleChange}
          />
          <label>2</label>

          <input
            type="radio"
            id="priority-1"
            name="priority"
            value={3}
            checked={formData.priority == 3}
            onChange={handleChange}
          />
          <label>3</label>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            value={4}
            checked={formData.priority == 4}
            onChange={handleChange}
          />
          <label>4</label>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            value={5}
            checked={formData.priority == 5}
            onChange={handleChange}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label htmlFor="">Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
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
