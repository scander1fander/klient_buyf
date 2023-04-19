import React from "react";
import '../index.css';
import Cruglesh1 from "../img/cruglesh1.jpg"
import Corsinka from "../img/Corsinka.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";


function Cruglesh() {

  const [us, setUs] = useState([])
  const {request} = useHttp()
  useEffect(() => {
    request(`http://localhost:8081/products/7`).then((data) => setUs(data))
    console.log(us)
  }, [])

    return (
      <div>
      {us.map(({id, name, amount, price}, index) => (
        <Card id="cards" key={index}>
          <Card.Img variant="top" className="buket1" src={Cruglesh1}/>
            <Card.Body>
              <Card.Title className="bukettitle">{name}</Card.Title>
              <img src={Corsinka} style={{width:'20%', cursor: "pointer"}}/>
              <Button variant="light" className="cina1" href="/tovar"><span className="new">{price}  </span><span className="last">3699 Р</span></Button>
            </Card.Body>
          <p></p>
        </Card>
      ))}
    </div>
    // <Card id="cards">
    //   <Card.Img variant="top" className="buket1" src={Cruglesh1}/>
    //   <Card.Body>
    //     <Card.Title className="bukettitle">Букет "Летний"</Card.Title>
    //     <img src={Corsinka} style={{width:'20%', cursor: "pointer"}}/>
    //     <Button variant="light" className="cina1" href="/tovar"><span className="new">2499 Р</span><span className="last">3699 Р</span></Button>
    //   </Card.Body>
    // </Card>
  );
}
export default Cruglesh;