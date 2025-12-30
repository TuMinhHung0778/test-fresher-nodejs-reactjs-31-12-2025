import { useEffect, useState } from "react";
import { productApi } from "../api/product.api";
import CommonTable from "../components/CommonTable";
import CommonModal from "../components/CommonModal";
import { toastSuccess, toastError } from "../utils/toast";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(null);

  const columns = [
    { key: "name", label: "Name" },
    { key: "price", label: "Price" },
  ];

  const fetchData = async () => {
    const res = await productApi.getAll();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      price: e.target.price.value,
    };

    try {
      current
        ? await productApi.update(current.id, formData)
        : await productApi.create(formData);

      toastSuccess("Success");
      setShowModal(false);
      fetchData();
    } catch {
      toastError("Error");
    }
  };

  return (
    <div className="container mt-4">
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          setCurrent(null);
          setShowModal(true);
        }}
      >
        Add Product
      </button>

      <CommonTable
        columns={columns}
        data={products}
        onEdit={(item) => {
          setCurrent(item);
          setShowModal(true);
        }}
        onDelete={(item) => productApi.delete(item.id).then(fetchData)}
      />

      <CommonModal
        title={current ? "Edit Product" : "Add Product"}
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          defaultValue={current?.name}
          className="form-control mb-2"
          placeholder="Name"
        />
        <input
          name="price"
          defaultValue={current?.price}
          className="form-control"
          placeholder="Price"
        />
      </CommonModal>
    </div>
  );
}

export default ProductPage;
