import React from "react";

const categories = [
  { name: "Kilos", img: "https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" },
  { name: "Mobiles", img: "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" },

  { name: "Fashion", img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100", hasDropdown: true },

  { name: "Electronics", img: "https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100", hasDropdown: true },

  { name: "Home & Furniture", img: "	https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100", hasDropdown: true },

  { name: "Appliances", img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" },

  { name: "Flight Bookings", img: "https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" },

  { name: "Beauty, Toys & More", img: "	https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100", hasDropdown: true },

  { name: "Two Wheelers", img: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100", hasDropdown: true },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((cat, index) => (
        <div className="category-item" key={index}>
          <img src={cat.img} alt={cat.name} className="category-icon" />
          <span className="category-text">{cat.name}</span>
          {cat.hasDropdown && <span className="dropdown-icon">▼</span>}
        </div>
      ))}
    </div>
  );
};

export default Categories;
