import React from 'react';
import { Grid } from '@material-ui/core';
import './AboutUs.css';

class AboutUs extends React.Component {
  render() {
    const phoneNumber = "0941 218 057";
    const adminTeam = ["Đào Nhật Khánh", "Cáp Hữu Anh Trí", "Nguyễn Hữu Huy", "Nguyễn Thành Đăng"];
    const email = "trihx2003@gmail.com";

    return (
      <Grid container justify="center" className="about-us">
        <div className="card">
          <h1>About Us</h1>
          <div className="image-background"></div>
          <p>Welcome to our sports website! We are passionate about sports and strive to bring you the latest news, updates, and insights from the world of sports.</p>
          <p>Our team of dedicated writers and enthusiasts cover a wide range of sports, including football, basketball, tennis, and more. We aim to provide comprehensive coverage and in-depth analysis to keep you informed and engaged.</p>
          <p>Whether you're a die-hard sports fan or a casual observer, we've got something for everyone. Stay tuned for exciting content and join us on this thrilling journey through the world of sports.</p>
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> {phoneNumber}</p>
          <h3>ADMIN Team</h3>
          <ul>
            {adminTeam.map((admin, index) => (
              <li key={index}>{admin}</li>
            ))}
          </ul>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </Grid>
    );
  }
}

export default AboutUs;