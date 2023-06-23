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
            <div className="add-product-page" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '200px',
                background: '#fff',
                boxShadow: '0px 0px 21px rgb(0 0 0 / 20%)',
                width: '400px',
                height: ' 500px',
            }}>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{
                }}>
                    <h3 className="title" style={{ position: 'relative', justifyContent: 'center' }}>Thêm sản phẩm</h3>
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label style={{
                                width: '100%',
                                display: 'block',
                            }}>Tên Sản Phẩm: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtName"
                                value={txtName}
                                onChange={this.onChange}
                                style={{
                                    height: '15px',
                                    display: 'block',
                                    width: '100%',
                                    padding: '6px 8px',
                                }} />
                        </div>
                        <div className="form-group">
                            <label style={{
                                width: '100%',
                                display: 'block',
                            }}>Loại sản phẩm: </label>
                            <input type="text"
                                className="form-control"
                                name="txtCategory"
                                value={txtCategory}
                                onChange={this.onChange}
                                style={{
                                    height: '15px',
                                    display: 'block',
                                    width: '100%',
                                    padding: '6px 8px',
                                }} />
                        </div>
                        <div className="form-group">
                            <label style={{
                                width: '100%',
                                display: 'block',
                            }}>Giá: </label>
                            <input type="number"
                                className="form-control"
                                name="txtPrice"
                                value={txtPrice}
                                onChange={this.onChange}
                                style={{
                                    height: '15px',
                                    display: 'block',
                                    width: '100%',
                                    padding: '6px 8px',
                                }} />
                        </div>
                        <div className="form-group">
                            <label style={{
                                width: '100%',
                                display: 'block',
                            }}>Ảnh: </label>
                            <input type="link"
                                className="form-control"
                                name="txtImage"
                                value={txtImage}
                                onChange={this.onChange}
                                style={{
                                    height: '15px',
                                    display: 'block',
                                    width: '100%',
                                    padding: '6px 8px',
                                }} />
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
            </div>

        )
    }
}

export default ProductActionPage