import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './SignupStyles.css'

function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  const handleReset = () => {
    // Clear form fields and error message
    setName("");
    setEmail("");
    setPassword("");
  };



  return (

    <section className="gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <form onSubmit={handleSubmit}>
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="card-title mb-2">Register</h2>
                    <p className="text-white-50 mb-5">Please enter your Details!</p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="name"
                        className="form-control form-control-lg"
                        autoComplete="off"
                        pattern="^[A-Za-z]+$"
                        title="Please enter text characters only."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                      <label className="form-label" htmlFor="typeEmailX">Name</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <label className="form-label" htmlFor="typeEmailX">E-mail</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="reset" onClick={handleReset}>Reset</button>
                    <br /><br />
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>
                    <br /><br />
                    <p className="mb-0">Already have an account? <a href="/" className="text-white-50 font-weight-bold">Login</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3 position-sticky bottom-0">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} IT Department | Ministry of Agriculture</p>
        </div>
      </footer>
    </section>

  )
};

export default Signup;


