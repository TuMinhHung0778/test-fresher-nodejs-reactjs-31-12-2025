function LoginForm({ onSubmit }) {
  return (
    <form
      className="container mt-5"
      style={{ maxWidth: 400 }}
      onSubmit={onSubmit}
    >
      <h4 className="mb-3">Login</h4>

      <input
        name="email"
        type="email"
        className="form-control mb-2"
        placeholder="Email"
        required
      />

      <input
        name="password"
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        required
      />

      <button className="btn btn-primary w-100">Login</button>
    </form>
  );
}

export default LoginForm;

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
