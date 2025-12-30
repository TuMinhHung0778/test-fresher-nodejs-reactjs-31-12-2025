// TABLE CRUD – DÙNG CHO PRODUCT / USER / ORDER
function CommonTable({ columns, data, onEdit, onDelete }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((col) => (
              <td key={col.key}>{item[col.key]}</td>
            ))}
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(item)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CommonTable;
