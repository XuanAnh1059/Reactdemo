import React, {Component} from 'react';

class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            statechange: 'Mua'
        }
        this.updateState=this.updateState.bind(this);
    }
    updateState(){
        if(this.state.statechange == 'Mua') {
            this.setState({
                statechange: 'Đã mua'
            });
            this.props.clickEvt(this.props.data);

        }
    }
    render(){
        return(
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.data.image} />

                    <div className="caption">
                        <h3>{this.props.data.title_product}</h3>

                        <p>Giá: {this.props.data.price} VNĐ</p>

                        <p>
                            <button className="btn btn-primary" onClick={this.updateState}>{this.state.statechange}</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;