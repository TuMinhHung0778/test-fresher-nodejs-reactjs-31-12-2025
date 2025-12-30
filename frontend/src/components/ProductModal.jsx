// modal thêm/sửa sản phẩm
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

function ProductModal({ show, onHide, onSubmit, product }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    categoryId: "",
  });

  useEffect(() => {
    if (product) setForm(product);
  }, [product]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product ? "Edit" : "Add"} Product</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={form.name}
          />
          <Form.Control
            name="price"
            placeholder="Price"
            className="mt-2"
            onChange={handleChange}
            value={form.price}
          />
          <Form.Control
            name="categoryId"
            placeholder="Category ID"
            className="mt-2"
            onChange={handleChange}
            value={form.categoryId}
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => onSubmit(form)}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
