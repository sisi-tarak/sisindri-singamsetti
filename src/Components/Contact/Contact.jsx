import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/contact", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setError("");
      alert("Message sent successfully!");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="h-screen justify-center align-middle items-center">
      <h1 className="text-3xl text-center text-black font-semibold">Contact</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-[500px] mx-auto p-4 "
      >
        <TextField
          id="name"
          label="Name"
          variant="standard"
          defaultValue="Small"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="standard"
          defaultValue="Small"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="message"
          label="Message"
          variant="standard"
          defaultValue="Small"
          size="small"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && (
          <div className="text-red-500 font-medium">Error: {error}</div>
        )}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Contact;
