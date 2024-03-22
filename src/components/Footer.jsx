import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo-img'>
        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' alt='Logo' />
      </div>
      <div className="basic footer-content">
        <h5>THE BASICS</h5>
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Support Forums</span>
        <span>System Status</span>
      </div>
      <div className="involved footer-content">
        <h5>GET INVOLVED</h5>
        <span>Contribution Bible</span>
        <span>Add New Movie</span>
        <span>Add New TV Show</span>
      </div>
      <div className="community footer-content">
        <h5>COMMUNITY</h5>
        <span>Guidelines</span>
        <span>Discussions</span>
        <span>Leaderboard</span>
      </div>
      <div className="legal footer-content">
        <h5>LEGAL</h5>
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>DMCA Policy</span>
      </div>
    </div>
  )
}
