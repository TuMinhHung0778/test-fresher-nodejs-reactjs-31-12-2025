// bảng sản phẩm
import { Table, Button } from "react-bootstrap";

function ProductTable({ products, onEdit, onDelete }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p, index) => (
          <tr key={p.id}>
            <td>{index + 1}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.Category?.name}</td>
            <td>
              <Button size="sm" onClick={() => onEdit(p)}>
                Edit
              </Button>{" "}
              <Button size="sm" variant="danger" onClick={() => onDelete(p)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductTable;
