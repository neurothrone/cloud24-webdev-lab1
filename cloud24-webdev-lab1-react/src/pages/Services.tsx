import {useState} from "react";

import {Toast} from "react-bootstrap";

import Service from "../common/Service.ts";
import ServiceList from "../components/Services/ServiceList.tsx";

function Services() {
  const [cart, setCart] = useState<Service[]>([]);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => setShowToast(!showToast);

  function addToCart(service: Service) {
    setCart([...cart, service]);
    // setCart(prevState => [...prevState, service]);
    displayToast(service.name);
  }

  function toggleCart() {
    toggleCartVisibility();
  }

  function toggleCartVisibility() {
    const cartModal: HTMLElement | null = document.getElementById("cartModal");
    if (!cartModal) {
      return;
    }
    cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
  }

  function clearCart() {
    setCart([]);
  }

  function displayToast(serviceName: string) {
    setShowToast(true);
    setToastMessage(`Added "${serviceName}" to your cart. Hope you're ready for this!`);
  }

  return (
    <>
      <main className="container-fluid py-4">
        <section>
          <h2>Our Services</h2>
          <ServiceList addToCart={addToCart}/>
        </section>
        <section className="mt-5">
          <h3>Your Cart</h3>
          <button className="btn btn-warning" onClick={toggleCart}>View Cart</button>
          <div id="cartModal" className="modal" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Cart</h5>
                  <button type="button" className="btn-close" onClick={toggleCart}></button>
                </div>
                <div className="modal-body" id="cartItems">
                  {cart.length == 0 ?
                    <p className="text-center">Your cart is empty. Guess you're still deciding what bad decisions to
                      make today.</p> : cart.map((item, index) => {
                      return (
                        <p key={index}>{item.name} - ${item.price}</p>
                      );
                    })}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
                  <button type="button" className="btn btn-secondary" onClick={toggleCart}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Toast show={showToast}
             onClose={toggleShowToast}
             delay={3000}
             autohide
             bg="dark"
             className="toast position-fixed bottom-0 end-0">
        <Toast.Header className="custom-toast"
                      closeVariant="white">
          <strong className="me-auto">Cart</strong>
        </Toast.Header>
        <Toast.Body className="toast-body">{toastMessage}</Toast.Body>
      </Toast>
    </>
  );
}

export default Services;