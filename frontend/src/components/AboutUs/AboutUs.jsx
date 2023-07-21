import React from 'react';
import { Grid } from '@material-ui/core';
import './AboutUs.css';

class AboutUs extends React.Component {
  render() {
    const adminTeam = ["Đào Nhật Khánh", "Cáp Hữu Anh Trí", "Nguyễn Hữu Huy", "Nguyễn Thành Đăng"];
    const partners = [
      { name: "Nike", website: "https://www.nike.com/vn/" },
      { name: "Shopee", website: "https://shopee.vn/" },
      { name: "Microsoft", website: "https://www.microsoft.com/vi-vn/" }
    ];
    const jobOpenings = [
      { title: "Sports Writer", description: "We are looking for talented sports writers to join our team. If you have a passion for sports and a flair for writing, we'd love to hear from you!" },
      { title: "Web Developer", description: "Are you a skilled web developer with a passion for sports? Join us in enhancing our website and creating innovative features for our users." },
      { title: "Social Media Specialist", description: "Do you have a knack for engaging content and a love for sports? Help us grow our social media presence and connect with our community." }
    ];
    const privacyPolicy = "Link to your privacy policy page or content.";
    const termsOfUse = "Link to your terms of use page or content.";

    return (
      <Grid container className="about-us">
        <Grid item md={3} className="left-column">
          <div className="image-left"></div>
        </Grid>
        <Grid item md={6} className="middle-column">
          <div className="image-middle"></div>
          <div className="card">
            <div className="content">
              <h1>About Us</h1>
              <h2>History</h2>
              <p>
              We started the project in 2021 with the goal of bringing the community the best quality sports information. Since our founding, we have constantly grown and built a strong community of sports enthusiasts. Up to now, we have won many prestigious awards in the sports field and are constantly improving to bring the best user experience.
              </p>
              <h2>Our Team</h2>
              <ul>
                {adminTeam.map((admin, index) => (
                  <li key={index}>{admin}</li>
                ))}
              </ul>
              <h2>Partners and Sponsors</h2>
              <ul>
                {partners.map((partner, index) => (
                  <li key={index}><a href={partner.website} target="_blank" rel="noopener noreferrer">{partner.name}</a></li>
                ))}
              </ul>
              <h2>Recruitment</h2>
              <ul>
                {jobOpenings.map((job, index) => (
                  <li key={index}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                  </li>
                ))}
              </ul>
              <h2>Policy And Terms</h2>
              <p>
                <strong>Privacy Policy:</strong> <a href={privacyPolicy} target="_blank" rel="noopener noreferrer">Link to Privacy Policy</a>
              </p>
              <p>
                <strong>Terms of Use:</strong> <a href={termsOfUse} target="_blank" rel="noopener noreferrer">Link to Terms of Use</a>
              </p>
              
            </div>
          </div>
        </Grid>
        <Grid item md={3} className="right-column">
          <div className="image-right"></div>
        </Grid>
      </Grid>
    );
  }
}

export default AboutUs;
