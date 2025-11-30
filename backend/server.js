const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Appointment = require("./models/Appointment");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple health check
app.get("/", (req, res) => {
  res.send("DocAppoint backend is running");
});

// Create appointment
app.post("/api/appointments", async (req, res) => {
  try {
    const { name, phone, doctorName, speciality, timeSlot } = req.body;

    if (!name || !phone || !doctorName || !speciality || !timeSlot) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const appointment = new Appointment({
      name,
      phone,
      doctorName,
      speciality,
      timeSlot,
    });

    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully", appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// (Optional) Get all appointments
app.get("/api/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
