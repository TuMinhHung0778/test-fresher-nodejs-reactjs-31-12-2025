// Dùng khi đề có:

// Admin

// Menu trái

// Quản lý nhiều module

function Sidebar({ onSelect }) {
  return (
    <div className="border-end p-3" style={{ width: 200 }}>
      <h6>Admin</h6>
      <ul className="nav flex-column">
        <li className="nav-item">
          <button className="btn btn-link" onClick={() => onSelect("products")}>
            Products
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-link" onClick={() => onSelect("users")}>
            Users
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

/*
Layout gắn nhanh
<div className="d-flex">
  <Sidebar onSelect={setPage} />
  <div className="flex-grow-1 p-3">
    {page === "products" && <ProductPage />}
  </div>
</div> */
