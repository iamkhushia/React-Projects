
// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductAsync } from "../Servise/action/product.action";
// import { Button } from "react-bootstrap";

// const ViewProduct = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { product } = useSelector((state) => state.productReducer);

//   useEffect(() => {
//     if (id) {
//       dispatch(getProductAsync(id));
//     }
//   }, [id, dispatch]);

//   const handleChange = () => {
//     navigate("/");
//   };

//   return (
//     <>
       
//     <div className="view-product-container">
//     <p>This Product Show With View More Deatils...!!
//     </p>
//       {product ? (
//         <div className="product-card">
//           {/* Left Side - Image */}
//           <div className="product-image-container">
//             <img src={product.product_image} alt="Product" />
//           </div>

//           {/* Right Side - Product Details */}
//           <div className="product-info">
//             <h2>{product.product_name}</h2>
//             <h3>Price: ${product.product_price}</h3>
//             <p>{product.product_description}</p>
//             <p>
//               <strong>Category:</strong> {product.category}
//             </p>
//             <Button className="back-btn" onClick={handleChange}>
//               Go Back
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <p>No product found!</p>
//       )}
//     </div>
//     </>
//   );
// };

// export default ViewProduct;

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync } from "../Servise/action/product.action";
import { Button } from "react-bootstrap";

const ViewProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (id) {
      dispatch(getProductAsync(id));
    }
  }, [id, dispatch]);

  const handleChange = () => {
    navigate("/");
  };

  return (
    <>
      <div className="view-product-container">
        <p>Now Product Show With View More Details...!!</p>
        {product ? (
          <div className="product-card">
            {/* Left Side - Image */}
            <div className="product-image-container">
              <img src={product.product_image} alt="Product" />
            </div>

            {/* Right Side - Product Details */}
            <div className="product-info">
              <h2>{product.product_name}</h2>
              <h3>Price: ${product.product_price}</h3>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>{product.product_description}</p>
              <Button className="back-btn" onClick={handleChange}>
                Go Back
              </Button>
            </div>
          </div>
        ) : (
          <p>No product found!</p>
        )}
      </div>
    </>
  );
};

export default ViewProduct;
