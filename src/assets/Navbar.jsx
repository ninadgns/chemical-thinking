import logo from '../images/logo.svg'

function Navbar() {
  return (
    <div className="navbar navbar-light navbar-expand-lg" style={{ 'background-color': '#e3f2fd' }}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex gap-2 align-items-center" href="#">
          <img src={logo} width="35" height="35" /> Chemical Thinking</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item  px-1 ">
              <a className="nav-link my-1" href="#why">Why Chemical Thinking</a>
            </li>
            <li className="nav-item  px-1">
              <a className="nav-link my-1" href="#what">What You'll Learn</a>
            </li>
            <li className="nav-item  px-1">
              <a className="nav-link my-1 px-2 btn btn-primary text-white" href="#enroll" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Enroll Now</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
 
export default Navbar