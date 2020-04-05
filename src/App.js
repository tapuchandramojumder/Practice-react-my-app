import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = ['jolil', 'Md. rofiq', 'Mr. kholi', 'kholil'];
  var products = [
    { name: 'Photoshop', price: '$44.63', made: 'made in Japan' },
    { name: 'Illustrator', price: '$34.63', made: 'made in Korea' },
    { name: 'Scaner', price: '$14.23', made: 'made in Uk' },
    { name: 'Printer', price: '$24.63', made: 'made in China' },
    { name: 'Adobe Pro', price: '$14.23', made: 'made in Uk' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>my first Paragraph</p>
          <Counter></Counter>

          <Users></Users>

          <ul>
            {products.map((product) => (
              <li>{product.name}</li>
            ))}
          </ul>
          <h4>{person.name + ' ' + person.age + ' ' + person.future}</h4>
          <h3>Ready to practice React.js</h3>

          {products.map((product) => (
            <Product ourproduct={product}></Product>
          ))}

          <Product ourproduct={products[0]}></Product>

          <Product ourproduct={products[1]}></Product>

          <Product ourproduct={products[2]}></Product>

          <Product ourproduct={products[3]}></Product>
          {/* <Product
            name={products[1].name} price={products[1].price}   made={products[1].made}
          ></Product>
             <Product
            name={products[0].name}
            price={products[0].price}
            made={products[0].made}
          ></Product>

          <Product
            name={products[2].name}
            price={products[2].price}
            made={products[2].made}
          ></Product> */}
          <ParsonDetails name=" 2020 , Sakib All Hasan"></ParsonDetails>
          <ParsonDetails name=" 2019, Kuddus ali khan"></ParsonDetails>
          <ParsonDetails name={person[2]} year="2015"></ParsonDetails>
          <ParsonDetails name={person[1]} year="2017"></ParsonDetails>
        </div>
      </header>
    </div>
  );
}
//Dynamic data load to our website
function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Data:{user.length}</h3>
      <ul>
        {user.map((usr) => (
          <li>
            {usr.name} : {usr.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(12);
  const handler = () => setCount(count + 1);

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <button onClick={handler}>Increase</button>
    </div>
  );
}

function Product(props) {
  var productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'yellow',
    height: '260px',
    width: '260px',

    textAlign: 'center',
    marginBottom: '2px',
    color: 'cyan',
    float: 'left',
    textAlign: 'center',
  };

  const { name, price, made } = props.ourproduct;

  return (
    <div style={productStyle}>
      <h5> {name}</h5>
      <h3> {price}</h3>
      <h6>{made}</h6>
    </div>
  );
}

function ParsonDetails(props) {
  var personStyle = {
    color: 'yellow',
    border: '2px solid red',
    backgroundColor: 'cyan',
    margin: 10,
    padding: 10,
    fontSize: '40px',
    float: 'left',
  };
  return (
    <div style={personStyle}>
      <h4
        style={{
          color: 'gray',
          backgroundColor: 'tomato',
          padding: 20,
          borderRadius: 10,
        }}
      >
        person component
      </h4>
      <h2>
        Best cricketer in the world {props.year}, {props.name}
      </h2>
    </div>
  );
}

export default App;
