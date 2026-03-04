import axios from "axios";
import dayjs from "dayjs";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./TrackingPage.css";

function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios.get(`api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    };
    getOrder();
  }, [orderId]);

  if (!order) {
    return null;
  }
  const selectedProduct = order.products.find((product) => {
    return product.productId === productId;
  });

  const totalDeliveryTimeMs =
    selectedProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  const estimatedProgress = (timePassedMs / totalDeliveryTimeMs) * 100;
  const deliveryProgress = estimatedProgress > 100 ? 100 : estimatedProgress;

  const isPreparing = deliveryProgress < 33;
  const isShipped = deliveryProgress >= 33 && deliveryProgress < 100;
  const isDelivered = deliveryProgress === 100;

  console.log(isPreparing, isShipped, isDelivered);

  return (
    <>
      <link
        rel="icon"
        type="image/svg+xml"
        href="./public/tracking-favicon.png"
      />
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {deliveryProgress < 100 ? "Arriving on" : "Delivered on"}{" "}
            {dayjs(selectedProduct.estimatedDeliveryTimeMs).format(
              "dddd, MMMM D",
            )}
          </div>

          <div className="product-info">{selectedProduct.product.name}</div>

          <div className="product-info">{selectedProduct.quantity}</div>

          <img className="product-image" src={selectedProduct.product.image} />

          <div className="progress-labels-container">
            <div
              className={`progress-label ${isPreparing && "current-status"}`}
            >
              Preparing
            </div>
            <div className={`progress-label ${isShipped && "current-status"}`}>
              Shipped
            </div>
            <div
              className={`progress-label ${isDelivered && "current-status"}`}
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${deliveryProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingPage;
