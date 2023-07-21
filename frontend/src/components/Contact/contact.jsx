import React from 'react';
import { Grid } from '@material-ui/core';
import './contact.css';

class Contact extends React.Component {
  render() {
    const phoneNumber = "0941218057";
    const adminTeam = ["Đào Nhật Khánh", "Cáp Hữu Anh Trí", "Nguyễn Hữu Huy", "Nguyễn Thành Đăng"];
    const email = "trihx2003@gmail.com";

    return (
      <Grid container justify="center" className="contact-container">
        <div className="contact-card">
          <h1>Thông tin liên hệ</h1>
          <p><strong>Số điện thoại:</strong> {phoneNumber}</p>
          <h2>Đội ngũ ADMIN</h2>
          <ul>
            {adminTeam.map((admin, index) => (
              <li key={index}>{admin}</li>
            ))}
          </ul>
          <p><strong>Email:</strong> {email}</p>
          <h2>Kết nối với chúng tôi qua mạng xã hội</h2>
          <ul className="social-media-links">
            <li>
              <a href="https://www.facebook.com/MiamiHeat" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@mazuong2k" target="_blank" rel="noopener noreferrer">Youtube</a>
            </li>
            <li>
              <a href="https://www.instagram.com/miamiheat/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            
          </ul>
        </div>
      </Grid>
    );
  }
}

export default Contact;