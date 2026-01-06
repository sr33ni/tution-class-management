import React from "react"

type ContentProps = {
  onNavToggle: () => void;
}

const Header = ({onNavToggle}: ContentProps)=> {
    return(
       <>
                     <nav className="navbar navbar-expand-lg border-bottom px-3 w-100">
                <div className="d-flex align-items-center gap-3">
                  <button className="btn btn-outline-secondary" onClick={onNavToggle}>
                    ☰
                  </button>
                  <span className="navbar-brand fw-bold">Dashboard</span>
                </div>
                <div className="ms-auto d-flex align-items-center gap-3">
                  <input
                    type="text"
                    className="py-2 form-control rounded bg-primary-subtle border-0"
                    placeholder="Search"
                  />
                  <button className="btn btn-outline-secondary">
                    <i className="fas fa-moon"></i>
                  </button>
                </div>
              </nav>
       </>
    )
}
 export default Header