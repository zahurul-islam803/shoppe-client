import axiosSecure from './index'

// get all product data
export const getAllProduct = async (category) => {
  const { data } = await axiosSecure.get(`/products?category=${category}`);
  return data;
};

// get single product data
export const getSingleProduct = async (id) => {
  const {data} = await axiosSecure.get(`/products/${id}`);
  return data;
}

// post data to the cart
export const addToCart = async (cartItem) =>{
  const {data} = await axiosSecure.post(`/products/cart`, cartItem);
  return data;
}

// delete cart item
export const deleteCart = async (id) => {
  const {data} = await axiosSecure.delete(`/carts/${id}`);
  return data;
}

// payment
export const cretePaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};

// save booking info in db
export const saveBookingInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/bookings", paymentInfo);
  return data;
};
