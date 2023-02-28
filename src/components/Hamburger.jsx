import React from 'react'

const Hamburger = ( {handleClick, open} ) => {
  return (
    <div className={`right-8 z-50 ${open ? "is-active" : null}`} id="hamburger" onClick={handleClick}>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
}

export default Hamburger