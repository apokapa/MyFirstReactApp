import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import DeleteProduct from './DeleteProduct';

//Presentation component for row....
const ProductsListRow = ({product, deleteProduct}) => {
  return (
    <tr>
      <td>{product.Id}</td>
      <td>{product.Name}</td>
      <td>($) {product.Price}</td>
      <td><Link to={'/product/' + product.Id} className="btn btn-block btn-primary">EDIT</Link></td>
      <td><DeleteProduct
                deleteFunction={deleteProduct}
                itemToDelete={product} /></td>
     </tr>
  );
};

ProductsListRow.propTypes = {
  product: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired
};

export default ProductsListRow;