
const Mynav = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                      <li className="nav-item">
                        <a href="/profile" className="nav-link">PROFILE</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a href="#" 
                            className="nav-link dropdown-toggle"
                            data-bs-toggle='dropdown'>
                                MENU
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="/pos" className="dropdown-item" style={{fontSize: '20px'}}>
                                  <i className='fas fa-bullseye' style={{fontSize: '18px'}}></i>&nbsp;POS
                                </a>
                                <a href="/sale" className="dropdown-item" style={{ fontSize: '20px' }}>
                                <i className='fas fa-pound-sign' style={{fontSize: '18px'}}></i>
                                  &nbsp;SALE</a>
                                <a href="/receivable" className="dropdown-item" style={{fontSize: '20px'}}>
                                  <i className='fas fa-hand-holding-usd' style={{fontSize: '18px'}}></i>&nbsp;RECEIVABLE
                                </a>
                                <a href="/purchase" className="dropdown-item">PURCHASE</a>
                                <a href="/expense" className="dropdown-item">EXPENSE</a>
                                <a href="/user" className="dropdown-item">USER</a>
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