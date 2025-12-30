// MODAL FORM DÙNG CHUNG (ADD / EDIT)
function CommonModal({ title, show, onClose, onSubmit, children }) {
  if (!show) return null;

  return (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>{title}</h5>
            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={onSubmit}>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommonModal;
// 👉 Dùng cho Product / User / Category / …
