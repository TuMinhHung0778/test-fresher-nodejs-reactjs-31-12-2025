function RegisterForm({ onSubmit }) {
  return (
    <form
      className="container mt-5"
      style={{ maxWidth: 400 }}
      onSubmit={onSubmit}
    >
      <h1 className="mb-3 text-center">Đăng ký tham gia cuộc thi</h1>
      {/* <h4 className="mb-3">Login</h4> */}

      {/* Họ và tên */}
      <h5 className="mb-3">Họ và tên</h5>
      <input
        name="Họ và tên"
        type="text"
        className="form-control mb-2"
        placeholder="Nhập họ và tên"
        required
      />

      {/* Ngày sinh */}
      <h5 className="mb-3">Ngày sinh</h5>
      <input
        name="dateofbirth"
        type="date"
        className="form-control mb-2"
        required
      />

      {/* Giới tính */}
      <h5 className="mb-3">Giới tính</h5>
      <input
        name="gender"
        type="radio"
        placeholder="Chọn giới tính"
        className="form-control mb-2"
        required
      />

      {/* Email */}
      <h5 className="mb-3">Email</h5>
      <input
        name="email"
        type="email"
        className="form-control mb-2"
        placeholder="example@gmail.com"
        required
      />

      {/* Số điện thoại */}
      <h5 className="mb-3">Số điện thoại</h5>
      <input
        name="phone"
        type="tel"
        className="form-control mb-2"
        placeholder="0123456789"
        required
      />

      {/* Cuộc thi */}
      <h5 className="mb-3">Cuộc thi</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Chọn cuộc thi"
      />

      {/* <input
        name="password"
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        required
      /> */}

      <button className="btn btn-primary w-100">Gửi đăng ký</button>
    </form>
  );
}

export default RegisterForm;

/**
 * Cách dùng nhanh
const handleLogin = async (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };

  await authApi.login(data);
};
 */
