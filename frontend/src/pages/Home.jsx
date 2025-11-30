import React from "react";
import { Link } from "react-router-dom";
import doctors from "../data/doctors";

const categories = [
  "Orthopaedic",
  "Gynaecologist",
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
];

const Home = () => {
  const featuredDoctors = doctors.slice(0, 6);

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="badge badge-soft-red mb-2">
                  24x7 Doctor Appointment Portal
                </span>
                <h1 className="hero-title">
                  Book appointments with
                  <span className="text-red"> trusted doctors</span>, faster.
                </h1>
                <p className="hero-subtitle">
                  Skip the waiting lines. View specialists, check details and
                  book your preferred time slot with just a few clicks.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <Link to="/book" className="btn btn-red btn-lg">
                    Book Appointment
                  </Link>
                  <Link to="/doctors" className="btn btn-outline-red btn-lg">
                    View Doctors
                  </Link>
                </div>
                <div className="d-flex flex-wrap gap-4 mt-4 hero-stats">
                  <div>
                    <div className="stat-value">10+</div>
                    <div className="stat-label">Specialists</div>
                  </div>
                  <div>
                    <div className="stat-value">5</div>
                    <div className="stat-label">Departments</div>
                  </div>
                  <div>
                    <div className="stat-value">100%</div>
                    <div className="stat-label">Simple Booking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fake illustration card */}
            <div className="col-lg-6">
              <div className="hero-panel card shadow-sm border-0">
                <div className="card-body">
                  <h5 className="mb-3 fw-semibold">Quick Booking Snapshot</h5>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="small text-muted">Next Available</span>
                    <span className="badge bg-danger-subtle text-red border border-danger-subtle">
                      Today · Evening Slots
                    </span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div>
                        <div className="fw-semibold">Choose speciality</div>
                        <div className="small text-muted">
                          Orthopaedic, Gynae, Cardio and more
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div>
                        <div className="fw-semibold">Select doctor</div>
                        <div className="small text-muted">
                          View degrees and contact numbers
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div>
                        <div className="fw-semibold">Enter time slot</div>
                        <div className="small text-muted">
                          Mention your preferred time + details
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-3 bg-light-red d-flex justify-content-between align-items-center">
                    <div>
                      <div className="small text-muted">Currently viewing</div>
                      <div className="fw-semibold">
                        Dr. Harpreet Singh · Orthopaedic
                      </div>
                    </div>
                    <Link to="/book" className="btn btn-sm btn-red">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="home-section bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <h3 className="section-title mb-0"></h3>
            <div className="small text-muted">
              5 major categories · multiple doctors in each
            </div>
          </div>

         
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="home-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <h3 className="section-title mb-0">Featured doctors</h3>
            <Link to="/doctors" className="btn btn-sm btn-outline-red">
              View full list
            </Link>
          </div>

          <div className="row g-3">
            {featuredDoctors.map((doc) => (
              <div key={doc.id} className="col-md-6 col-lg-4">
                <div className="card doctor-card-pro h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <div>
                        <div className="fw-semibold text-red">
                          {doc.name}
                        </div>
                        <div className="small text-muted">
                          {doc.speciality}
                        </div>
                      </div>
                      <span className="badge bg-light text-red border border-danger-subtle">
                        Available
                      </span>
                    </div>
                    <div className="small mb-2">
                      <strong>Degree: </strong>
                      {doc.degree}
                    </div>
                    <div className="small mb-3">
                      <strong>Contact: </strong>
                      {doc.phone}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="small text-muted">
                        Approx. 15–20 min consultation
                      </div>
                      <Link
                        to="/book"
                        className="btn btn-sm btn-red-soft text-red fw-semibold"
                      >
                        Book slot
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="home-section bg-light">
        <div className="container">
          <h3 className="section-title mb-4">How DocAppoint works</h3>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number">1</div>
                <h6>Select category</h6>
                <p className="small text-muted">
                  Choose from Orthopaedic, Gynae, Cardio, Skin, or Pediatric
                  doctors depending on your problem.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number">2</div>
                <h6>Pick your doctor</h6>
                <p className="small text-muted">
                  View Punjabi doctor names, degrees and contact numbers before
                  selecting the one you prefer.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number">3</div>
                <h6>Enter time & details</h6>
                <p className="small text-muted">
                  Simply add your name, mobile number and time slot. The
                  appointment gets stored securely in the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
            <div>
              <h5 className="mb-1 text-white">
                Need to book quickly for today?
              </h5>
              <div className="small text-light-50">
                Choose a doctor and mention your urgent time slot in the form.
              </div>
            </div>
            <Link to="/book" className="btn btn-light">
              Book an urgent appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
