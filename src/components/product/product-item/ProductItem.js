import React from "react";
import { Link } from "react-router-dom"

const ProductItem = ({item}) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td style={{textAlign: "right"}}>{item.price}$</td>
      <td style={{textAlign: "center"}}>
        <Link to={"/product/" + item.id}>Show</Link>
      </td>
      <td style={{textAlign: "center"}}>
        <Link to={"/product/edit/" + item.id}>Edit</Link>
      </td>
    </tr>
  );
};


export default ProductItem;