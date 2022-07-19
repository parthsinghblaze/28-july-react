function CourseSection() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2>React JS</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Join Class</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2>Angular JS</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Join Class</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2>Node JS</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Join Class</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
