import React,{Component} from 'react';

var data = [];
var total=0;

class Cart extends Component{
    constructor(props) {
        super(props);


    }

    render(){
        let obj = {};
        if(this.props.data !== null) {
            obj = this.props.data;
            data.push(obj);
            total += obj.price;
        }


        return(
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <label className="title-cart">Cart</label>
                    <table>
                        <thead>
                            <tr>
                                <th>Tên</th>
                                <th>SL</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item, id)=> {
                            return(
                                <tr key={id}>
                                    <td>{item.title_product}</td>
                                    <td>1</td>
                                    <td>{item.price}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    <span>Tổng tiền:{total}</span>
                </div>
            </div>
        );
    }
}
export default Cart;