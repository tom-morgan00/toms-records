import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import Product from './Product';
import Title from './Title';

export default class ProductList extends Component {
  render() {
    return (
      <>
        {/* <Product /> */}
        <div className="py-5">
          <div className="container">
            <Title title="our products" />
            <div className="row">
              <ProductConsumer>
                {(val) =>
                  val.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  })
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
