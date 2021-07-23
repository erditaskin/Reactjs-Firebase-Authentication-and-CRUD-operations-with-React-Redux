import React from "react";
import ProductItem from "components/product/product-item/ProductItem"
import { Table } from "react-bootstrap";

export default class ProductItems extends React.PureComponent {

  render() {
    const productList = this.props.productList;
    return (
      <>
        <Table bordered hover >
        <thead>
          <tr>
            <th width="250">ID</th>
            <th>Name</th>
            <th style={{textAlign: "right"}}>Price</th>
            <th colSpan="2" className="text-center">Controls</th>
          </tr>
        </thead>
        <tbody>
        {
          productList.map((item, index) => {
            return (
              <ProductItem key={index} item={item} />
            )
          })
        }
        </tbody>
        </Table>
      </> 
    );
  }
}
