import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Information from './components/Information';

let dataProduct=[
    {
        image: './demo1.jpg',
        title_product: 'Sản phẩm 1',
        price: 100000
    },
    {
        image: './demo2.jpg',
        title_product: 'Sản phẩm 2',
        price: 200000
    },
    {
        image: './demo3.jpg',
        title_product: 'Sản phẩm 3',
        price: 300000
    }
]

class App extends Component {
    render() {
        return (
            <Information dataproduct={dataProduct} />
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
)
