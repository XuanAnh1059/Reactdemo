import React, {Component} from 'react';
import Product from './Product';
import GroupTitle from './GroupTitle';
import Cart from './Cart';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemUI: [],
            data: null
        }
    }

    render() {
        let that = this;
        return (
            <div>
                <div className="bs-example" data-example-id="thumbnails-with-custom-content">
                    <GroupTitle />
                    <div className="row">
                    {
                        this.props.dataproduct.map((product, id)=> {
                            return <Product clickEvt={(item)=>{
                                that.state.data = item;
                                that.setState(this.state);
                                }
                            } data={product} key={id} />
                        })
                    }
                    <Cart data={this.state.data} />

                    </div>
                </div>
            </div>
        );
    }
}
export default Information;