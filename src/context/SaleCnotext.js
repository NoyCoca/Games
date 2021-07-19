import { createContext, useContext } from "react";

const SaleBigImg = [
  {
    img: "https://www.cnet.com/a/img/CKne_Sa7mrYY-f2CaD8kLrXHaVc=/1200x675/2020/10/27/8a5b615a-c5ff-4d4d-bdbd-c58e9e6543af/xbox-series-x-s-console-hoyle-studio-promo-23.jpg",
    name: "Xbox",
    type: "Series S",
    price: "300$",
  },
];

const SaleSmallImgs = [
  {
    img: "https://www.cnet.com/a/img/CKne_Sa7mrYY-f2CaD8kLrXHaVc=/1200x675/2020/10/27/8a5b615a-c5ff-4d4d-bdbd-c58e9e6543af/xbox-series-x-s-console-hoyle-studio-promo-23.jpg",
    name: "Xbox",
    type: "Series S",
    price: "300$",
  },
  {
    img: "https://play-lh.googleusercontent.com/Uh41jYkxd6yBkEHb08lTkaBhFKrt9ZLtUq5Ol6hq6_VHk1sDmFth0LRKXp3m4fxiYGsd",
    name: "Fifa",
    type: "year 2021",
    price: "100$",
  },
  {
    img: "https://m.media-amazon.com/images/I/41wsf0q562L.jpg",
    name: "UGP",
    type: "U8 VR Glasses 3D",
    price: "199$",
  },
];

export const SaleContext = createContext({SaleBigImg, SaleSmallImgs});
export const SaleContextProvider = SaleContext.Provider;

export function useSaleContext() {
  return useContext(SaleContext);
}
