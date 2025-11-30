import React, { useState } from "react";
import axios from "axios";
import doctors from "../data/doctors";

const specialities = [
  "Orthopaedic",
  "Gynaecologist",
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
];

const BookAppointment = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("Orthopaedic");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const filteredDoctors = doctors.filter(
    (doc) => doc.speciality === selectedSpeciality
  );

  const handleDoctorSelect = (doc) => {
    setSelectedDoctor(doc);
    setMessage("");
    setIsError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDoctor) {
      setMessage("Please select a doctor first.");
      setIsError(true);
      return;
    }

    if (!name || !phone || !timeSlot) {
      setMessage("Please fill all fields.");
      setIsError(true);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/appointments", {
        name,
        phone,
        timeSlot,
        doctorName: selectedDoctor.name,
        speciality: selectedDoctor.speciality,
      });

      setMessage(res.data.message || "Appointment booked successfully.");
      setIsError(false);

      setTimeSlot("");
      setName("");
      setPhone("");
      setSelectedDoctor(null);
    } catch (error) {
      console.error(error);
      setMessage("Error booking appointment. Please try again.");
      setIsError(true);
    }
  };

  return (
    <div className="container my-4">
      <div className="mb-3">
        <span className="small text-muted">Home / Book Appointment</span>
        <h1 className="mb-0 text-red">Book an appointment</h1>
        <p className="text-muted small mb-0">
          Select a speciality, choose a doctor and enter your preferred time slot.
        </p>
      </div>

      <div className="row g-3">
        {/* Left – category + doctors */}
        <div className="col-lg-7">
          <div className="card shadow-sm booking-card">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <div className="fw-semibold">1. Choose doctor</div>
              <span className="badge bg-light text-red border border-danger-subtle">
                {selectedDoctor ? "Doctor selected" : "No doctor selected"}
              </span>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="small text-muted mb-1">Doctor categories</div>
                <div className="d-flex flex-wrap gap-2">
                  {specialities.map((spec) => (
                    <button
                      key={spec}
                      className={`btn btn-sm category-pill ${
                        spec === selectedSpeciality ? "category-pill-active" : ""
                      }`}
                      onClick={() => {
                        setSelectedSpeciality(spec);
                        setSelectedDoctor(null);
                        setMessage("");
                        setIsError(false);
                      }}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              <div className="small text-muted mb-2">
                Doctors in{" "}
                <span className="fw-semibold text-red">
                  {selectedSpeciality}
                </span>
              </div>

              <div className="doctor-list-scroll">
                {filteredDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    className={`doctor-row-pro ${
                      selectedDoctor && selectedDoctor.id === doc.id
                        ? "doctor-row-selected"
                        : ""
                    }`}
                  >
                    <div>
                      <div className="fw-semibold">{doc.name}</div>
                      <div className="small text-muted">
                        {doc.degree} · {doc.phone}
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-red"
                      onClick={() => handleDoctorSelect(doc)}
                    >
                      {selectedDoctor && selectedDoctor.id === doc.id
                        ? "Selected"
                        : "Select"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right – form */}
        <div className="col-lg-5">
          <div className="card shadow-sm booking-card">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <div className="fw-semibold">2. Enter your details</div>
              <span className="small text-muted">
                All fields are required
              </span>
            </div>
            <div className="card-body">
              {selectedDoctor ? (
                <div className="alert alert-info py-2 small">
                  Booking for{" "}
                  <strong>{selectedDoctor.name}</strong> (
                  {selectedDoctor.speciality})
                </div>
              ) : (
                <div className="alert alert-secondary py-2 small">
                  Select a doctor on the left to continue.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small">Your name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small">Mobile number</label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    placeholder="Enter mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small">Time slot</label>
                  <textarea
                    className="form-control form-control-sm"
                    placeholder="e.g. Today, 6–7 PM or preferred date & time"
                    rows={3}
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-red w-100"
                  disabled={!selectedDoctor}
                >
                  Submit appointment
                </button>
              </form>

              {message && (
                <div
                  className={`alert mt-3 small ${
                    isError ? "alert-danger" : "alert-success"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </div>

          <div className="card mt-3 shadow-sm info-card">
            <div className="card-body small">
              <h6 className="text-red mb-2">Note</h6>
              <ul className="mb-0 ps-3">
                <li>
                  You’ll get a confirmation call/message on the mobile number you
                  provide.
                </li>
                <li>
                  Mention a clear time range in the time slot (e.g. 5–6 PM).
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
