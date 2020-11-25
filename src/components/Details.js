import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          // console.log(products);
          //prettier-ignore
          const { id, title, artist, image, price, inCart, tracklist, year, label } = val.product;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>Product Details</h1>
                </div>
              </div>
              {/* PRODUCT INFO */}
              <div className="row">
                {/* PRODUCT IMAGE */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={image} alt={title} className="img-fluid" />
                </div>
                {/* PRODUCT DESC */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    {artist}
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>£</span>
                      {price}
                    </strong>
                  </h4>
                  <h5 className="text-blue">label: {label}</h5>
                  <h5 className="text-blue">year: {year}</h5>

                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    tracklist:
                  </p>
                  <TrackWrapper>
                    {tracklist.length > 0
                      ? tracklist.map((track, index) => {
                          return (
                            <li key={index + 1} className="track">
                              {index + 1} {track}
                            </li>
                          );
                        })
                      : null}
                  </TrackWrapper>
                  {/* BUTTONS */}
                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart //passed cart prop to style components to change colors from blue to yellow
                    disabled={inCart ? true : false}
                    onClick={() => {
                      val.addToCart(id);
                      val.openModal(id);
                    }}
                  >
                    {inCart ? 'in Cart' : 'add to cart'}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

const TrackWrapper = styled.ul`
  padding: 0.5rem 1rem;
  .track {
    list-style-type: none;
  }
`;
