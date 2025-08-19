import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 text-center border-b-4 border-gray-200 pb-3">
          Your Cart
        </h1>

        {/* Clear Cart Button */}
        {cartItems.length > 0 && (
          <div className="flex justify-end">
            <button
              onClick={handleClearCart}
              className="px-5 py-2 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-transform duration-300"
            >
              Clear Cart
            </button>
          </div>
        )}

        {/* Empty Cart Message */}
        {cartItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <h2 className="text-xl font-semibold">Your cart is empty!</h2>
            <p className="mt-2">Add items to see them here.</p>
          </div>
        )}

        {/* Cart Items */}
        {cartItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
