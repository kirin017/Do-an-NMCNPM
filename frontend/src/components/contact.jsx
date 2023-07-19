
import React from 'react';
import { Grid } from '@material-ui/core';

class InformationForm extends React.Component {
    render() {
        const phoneNumber = "0941218057";
        const adminTeam = ["Đào Nhật Khánh", "Cáp Hữu Anh Trí", "Nguyễn Hữu Huy", "Nguyễn Thành Đăng"];
        const email = "trihx2003@gmail.com";
    
        return (
            <Grid style = {{marginTop : '200px', marginLeft : '50px'}}>
          <div >
            
            <h1>Thông tin liên hệ</h1>
            <p><strong>Số điện thoại:</strong> {phoneNumber}</p>
            <h2>Đội ngũ ADMIN</h2>
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

export default InformationForm;
