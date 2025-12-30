function SearchInput({ value, onChange, placeholder = "Search..." }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchInput;

/*
Cách dùng trong Page
const [search, setSearch] = useState("");

const filteredData = products.filter(p =>
  p.name.toLowerCase().includes(search.toLowerCase())
);

<SearchInput value={search} onChange={setSearch} />
<CommonTable data={filteredData} ... />
 */
