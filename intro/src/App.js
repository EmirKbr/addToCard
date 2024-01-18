import React, { Component } from 'react'
import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Col, Container, Row } from 'reactstrap';
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom"
import CardList from './CardList';
import Membership from './Membership';

export default class App extends Component {
  state = { currentCategory: "", products: [], card: [] }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  addToCard = (product) => {
    let newCard = this.state.card;
    var addedItem = newCard.find(c => c.product.id === product.id)
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCard.push({ product: product, quantity: 1 });
    }
    this.setState({ card: newCard });
    alertify.success(product.productName + " added to card.", 2);
  }

  removeFromCard = (product) => {
    let newCard = this.state.card.filter(c => c.product.id !== product.id);
    this.setState({ card: newCard });
    alertify.error(product.productName + " removed from card.", 2);
  }

  render() {
    let categoryInfo = { title: "Category List" }
    let productInfo = { title: "Product List" }
    return (
      <div className="App">
        <Container>
          <Navi removeFromCard={this.removeFromCard} card={this.state.card}></Navi>
          <Row>
            <Col xs="3"><CategoryList
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo}></CategoryList></Col>
            <Col xs="9">
              <Routes>
                <Route exact path="/" element={<ProductList
                    products={this.state.products}
                    addToCard={this.addToCard}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}/> }/>
                <Route exact path="/card" element={<CardList
                    card={this.state.card}
                    removeFromCard={this.removeFromCard}/> }/>
                <Route exact path='/membership' element={<Membership />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

