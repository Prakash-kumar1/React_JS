import React from 'react'

export const Footer = () => {
  return (
<div class="footer">
  <div class="inner-footer">

{/* <!--  for company name and description --> */}
    <div class="footer-items">
      <h1>Reunion</h1>
      <p>Real Estate Project of the company.</p>
    </div>

{/* <!--  for quick links  --> */}
    <div class="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div> 
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>

{/* <!--  for some other links --> */}
    <div class="footer-items">
      <h3>Real Estate Property</h3>
      <div class="border1"></div> 
        <ul>
          <a href="#"><li>Patna</li></a>
          <a href="#"><li>Delhi</li></a>
          <a href="#"><li>Luckhnow</li></a>
          <a href="#"><li>Varanasi</li></a>
          <a href="#"><li>Mumbai</li></a>
        </ul>
    </div>

{/* <!--  for contact us info --> */}
    <div class="footer-items">
      <h3>Contact us</h3>
      <div class="border1"></div>
        <ul>
          <li><i class="fa fa-user" aria-hidden="true"></i>Prakash Kumar</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>8948038363</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>kumarsanju4881@gmail.com</li>
        </ul> 
      
{/* <!--   for social links --> */}
        <div class="social-media">
          <a href="https://github.com/Prakash-kumar1"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/prakash-kumar-386706242/"><i class="fab fa-linkedin"></i></a>
        </div> 
    </div>
  </div>
  
{/* <!--   Footer Bottom start  --> */}
  <div class="footer-bottom">
    Copyright &copy; Real Estate property in 2022.
  </div>
</div>
  )
}

