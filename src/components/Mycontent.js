import React from "react"
import { Link } from "react-router-dom"


const Mycontent = () => {
  return (
    <div className="container">
        <div className="row py-4 d-flex">
            <div className="col-sm-6 mt-4">
                <div className="card bg-info">
                    <div className="card-body">
                        <h2 className="card-title text-light">Cash Sales</h2>
                        <p className="card-text text-light"><h6>D - Tzs 20,000</h6></p>
                        <p className="card-text text-light"><h6>M - Tzs 20,000</h6></p>
                        <p className="card-text text-light"><h6>Y - Tzs 20,000</h6></p>
                        <Link to={'cash-sale'} className='btn btn-dark'>View More</Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 mt-4">
                <div className="card bg-primary">
                    <div className="card-body">
                        <h2 className="card-title text-light">Credit Sales</h2>
                        <p className="card-text text-light"><h6>D - Tzs 20,000</h6></p>
                        <p className="card-text text-light"><h6>M - Tzs 20,000</h6></p>
                        <p className="card-text text-light"><h6>Y - Tzs 20,000</h6></p>
                        <Link to={'credit-sale'} className='btn btn-dark'>View More</Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 mt-4">
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h2 className="card-title text-light">Receivables</h2>
                        <p className="card-text text-light"><h6>Tzs 20,000</h6></p>
                        <Link to={'cash-purchase'} className='btn btn-dark'>View More</Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 mt-4">
                <div className="card bg-warning">
                    <div className="card-body">
                        <h2 className="card-title text-light">Expenses</h2>
                        <p className="card-text text-light"><h6>Tzs 20,000</h6></p>
                        <Link to={'credit-purchase'} className='btn btn-dark'>View More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mycontent