import React from "react";
import '../index.css';
import Corsinka from "../img/Corsinka.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import axios from "axios";



function Tovar() {
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:8081/products")
        .then(response => {
          const filteredProducts = response.data.filter(product => product.catid === 1);
          setFilteredProducts(filteredProducts);
          console.log(filteredProducts)
        })
        .catch(error => console.log(error));
    }, []);
  
    return (
      <div>
      {filteredProducts.map((product) => (
        <Card id="cards" key={product.id}>
          <Card.Img variant="top" className="buket1" src={`http://localhost:8081/photo/${product.photoId}`}/>
            <Card.Body>
              <Card.Title className="bukettitle">{product.name}</Card.Title>
              <img src={Corsinka} style={{width:'20%', cursor: "pointer"}}/>
              <Button variant="light" className="cina1" href="/tovar"><span className="new">{product.price}  </span><span className="last">3699 Р</span></Button>
            </Card.Body>
          <p></p>
        </Card>
      ))}
    </div>
  );
}
export default Tovar;