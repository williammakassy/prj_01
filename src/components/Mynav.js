

const Mynav = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">CoDe VENTORY</a>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle='collapse' 
                data-bs-target='ventoNavBar' 
                aria-expanded='false'
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="ventoNavbar">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                          <a href="#" 
                            className="nav-link dropdown-toggle"
                            data-bs-toggle='dropdown'>
                                MENU
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">POS</a>
                                <a href="#" className="dropdown-item">SALE</a>
                                <a href="#" className="dropdown-item">RECEIVABLE</a>
                                <a href="#" className="dropdown-item">PURCHASE</a>
                                <a href="#" className="dropdown-item">EXPENSE</a>
                                <a href="#" className="dropdown-item">USER</a>
                            </div>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  )
}

export default Mynav