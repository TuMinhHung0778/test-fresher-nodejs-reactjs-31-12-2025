function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
            <button className="page-link" onClick={() => onPageChange(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;

/*
Cách dùng nhanh
const pageSize = 5;
const [page, setPage] = useState(1);

const totalPages = Math.ceil(data.length / pageSize);
const pageData = data.slice(
  (page - 1) * pageSize,
  page * pageSize
);

<CommonTable data={pageData} ... />
<Pagination
  page={page}
  totalPages={totalPages}
  onPageChange={setPage}
/> */

// 📌 Dùng khi đề có:

// “Hiển thị 5 / 10 / 20 bản ghi”

// Pagination client-side
