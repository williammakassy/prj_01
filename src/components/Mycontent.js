

const Mycontent = () => {
  return (
    <div className="container">
        <div className="row mt-4 d-flex">
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Cash Sale</h3>
                        <p className="card-text"><h3>20000/=</h3></p>
                        <a href="#" className="btn btn-primary">View More</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Credit Sale</h3>
                        <p className="card-text"><h3>20000/=</h3></p>
                        <a href="#" className="btn btn-primary">View More</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Cash Purchase</h3>
                        <p className="card-text"><h3>20000/=</h3></p>
                        <a href="#" className="btn btn-primary">View More</a>
                    </div>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="card bg-warning">
                    <div className="card-body">
                        <h3 className="card-title">Credit Purchase</h3>
                        <p className="card-text"><h3>200,000/=</h3></p>
                        <a href="#" className="btn btn-dark">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mycontent