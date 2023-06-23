import React, { Component } from "react";

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtCategory: '',
            txtPrice: '',
            txtImage: '',
            chkbStatus: ''
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        var { txtName, txtPrice, txtCategory, txtImage, chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '300px'
            }}>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên Sản Phẩm: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Loại sản phẩm: </label>
                        <input type="text"
                            className="form-control"
                            name="txtCategory"
                            value={txtCategory}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Giá: </label>
                        <input type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Ảnh: </label>
                        <input type="link"
                            className="form-control"
                            name="txtImage"
                            value={txtImage}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange} />
                            Còn hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        )
    }
}

export default ProductActionPage