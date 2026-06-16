import {
  createContext,
  useEffect,
  useState,
} from "react";

import axiosInstance from "../api/axiosInstance";

export const WishlistContext =
  createContext();

export const WishlistProvider = ({
  children,
}) => {
  const [wishlist, setWishlist] =
    useState([]);

  const fetchWishlist = async () => {
    try {
      const res =
        await axiosInstance.get(
          "/wishlist"
        );

      setWishlist(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToWishlist =
    async (product) => {
      try {
        await axiosInstance.post(
          "/wishlist",
          {
            productId:
              product._id,

            name:
              product.name,

            description:
              product.description,

            price:
              product.price,

            category:
              product.category,

            stock:
              product.stock,

            imageUrl:
              product.imageUrl,
          }
        );

        fetchWishlist();
      } catch (error) {
        console.error(error);
      }
    };

  const removeWishlist =
    async (id) => {
      try {
        await axiosInstance.delete(
          `/wishlist/${id}`
        );

        fetchWishlist();
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};