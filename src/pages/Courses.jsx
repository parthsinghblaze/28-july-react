import React from "react";
import { allCourses } from "../allCourses";
import { useNavigate, Link } from "react-router-dom";
import MoveUp from "../component/MoveUp";

function Courses() {
  const navigate = useNavigate();

  return (
    <MoveUp>
      <h1>Courses</h1>
      <hr />
      <div className="row">
        {allCourses.map((item) => {
          const { id, name, price } = item;
          return (
            <div className="col-md-4" key={id}>
              <div className="card">
                <div className="card-header">
                  <h2>{name}</h2>
                </div>
                <div className="card-body">
                  <h3> {price} </h3>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/courses/${id}`)}
                  >
                    View
                  </button>
                  <Link to={`/courses/${id}`} className="btn btn-primary">
                    View
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MoveUp>
  );
}

export default Courses;
