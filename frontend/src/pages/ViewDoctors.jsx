import React, { useMemo, useState } from "react";
import doctors from "../data/doctors";

const ViewDoctors = () => {
  const [search, setSearch] = useState("");
  const [specialityFilter, setSpecialityFilter] = useState("All");

  const specialities = useMemo(
    () => ["All", ...Array.from(new Set(doctors.map((d) => d.speciality)))],
    []
  );

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSpec =
      specialityFilter === "All" || doc.speciality === specialityFilter;

    const matchesSearch =
      search.trim() === "" ||
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(search.toLowerCase());

    return matchesSpec && matchesSearch;
  });

  return (
    <div className="container my-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <div>
          <h1 className="mb-1 text-red">Doctor directory</h1>
          <p className="text-muted mb-0 small">
            Browse all available doctors with degrees and contact details.
          </p>
        </div>
      </div>

      <div className="card mb-3 shadow-sm filter-card">
        <div className="card-body">
          <div className="row g-3 align-items-center">
            <div className="col-md-4">
              <label className="form-label small mb-1">Search by name or speciality</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="e.g. Harpreet, Gynaecologist"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label small mb-1">Filter by speciality</label>
              <select
                className="form-select form-select-sm"
                value={specialityFilter}
                onChange={(e) => setSpecialityFilter(e.target.value)}
              >
                {specialities.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 text-md-end">
              <span className="badge bg-light text-red border border-danger-subtle">
                {filteredDoctors.length} doctor(s) found
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        {filteredDoctors.map((doc) => (
          <div key={doc.id} className="col-md-6 col-lg-4">
            <div className="card doctor-card-pro h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <h5 className="card-title mb-0 text-red">{doc.name}</h5>
                    <small className="text-muted">{doc.speciality}</small>
                  </div>
                  <span className="badge bg-light text-red border border-danger-subtle">
                    Available
                  </span>
                </div>
                <p className="small mb-1">
                  <strong>Degree: </strong>
                  {doc.degree}
                </p>
                <p className="small mb-0">
                  <strong>Phone: </strong>
                  {doc.phone}
                </p>
              </div>
            </div>
          </div>
        ))}

        {filteredDoctors.length === 0 && (
          <div className="col-12">
            <div className="alert alert-light border text-center">
              No doctors match your search. Try removing some filters.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDoctors;
