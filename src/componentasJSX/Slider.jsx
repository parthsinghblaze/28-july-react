function Slider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/5331071/pexels-photo-5331071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/4058797/pexels-photo-4058797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/5331074/pexels-photo-5331074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
