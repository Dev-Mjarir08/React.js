import React from 'react'

const App = () => {
  return (
    <>
      <header className=' position-fixed top-0 start-0 end-0 z-3'>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-dark">
            <div className="container-fluid">
              <a className="navbar-brand text-light" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>

        </div>

      </header>
      <main className=' bg-black'>
        <section className="hero">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-md-12">
                <div id="carouselExampleCaptions" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://images5.alphacoders.com/136/thumb-1920-1360655.png" className="d-block w-100 object-fit-cover  " height={700} alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images7.alphacoders.com/107/thumb-1920-1075657.jpg" className="d-block w-100 object-fit-cover " height={700} alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.alphacoders.com/129/thumb-1920-1293737.jpg" className="d-block w-100 object-fit-cover " height={700} alt="..." />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ marginTop: "120px" }}></div>
        <section className='cards bg-black'>
          <div className="container">
            <div className="row">
              <div className="header">
                <h2 className='text-center' style={{ fontSize: "56px", color:"white", letterSpacing:"8px" }}>Cards</h2>
              </div>
            </div>
            <div style={{ marginTop: "120px" }}></div>

            <div className="row">
              <div className="col-md-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://images5.alphacoders.com/136/thumb-1920-1360655.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://images5.alphacoders.com/136/thumb-1920-1360655.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://images5.alphacoders.com/136/thumb-1920-1360655.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>
              <div className="col-md-3">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://images5.alphacoders.com/136/thumb-1920-1360655.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section>
          
        <div style={{ marginTop: "120px" }}></div>
        </section>
      </main>
    </>
  )
}

export default App
