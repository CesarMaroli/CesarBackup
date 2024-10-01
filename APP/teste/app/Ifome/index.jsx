import React, { createContext, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const SelectSnack = () => {
  const { addToCart } = useContext(CartContext);

  const snacks = [
    { id: 1, name: "Marmita de Carne", price: 19 },
    { id: 2, name: "Marmita de Frango", price: 17 },
    { id: 3, name: "Batata Frita", price: 7 },
  ];

  return (
    <div style={styles.container}>
      <h1>Selecione seu Lanche</h1>
      <ul style={styles.list}>
        {snacks.map((snack) => (
          <li key={snack.id} style={styles.listItem}>
            {snack.name} - R${snack.price}
            <button style={styles.button} onClick={() => addToCart(snack)}>
              Adicionar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalItems = cart.length;
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.container}>
      <h1>Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cart.map((item, index) => (
              <li key={index} style={styles.listItem}>
                {item.name} - R${item.price}
              </li>
            ))}
          </ul>
          <div style={styles.total}>
            <p>Total de Itens: {totalItems}</p>
            <p>Total: R${totalPrice}</p>
          </div>
          <button style={styles.buyButton} onClick={clearCart}>
            Comprar
          </button>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>
            Seleção de Lanches
          </Link>{" "}
          |{" "}
          <Link to="/cart" style={styles.navLink}>
            Carrinho
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<SelectSnack />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  nav: {
    backgroundColor: "#333",
    padding: "1em",
    textAlign: "center",
  },
  navLink: {
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  buyButton: {
    backgroundColor: "#008CBA",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "1.1em",
    marginTop: "20px",
  },
  total: {
    fontSize: "1.2em",
    fontWeight: "bold",
    marginTop: "20px",
    textAlign: "right",
  },
};

export default App;
