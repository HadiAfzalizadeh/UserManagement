function DeleteUserModal() {
  return (
    <>
      <div className="row">
        <p>Sample Modal</p>
      </div>

      <div className="text-center">
        <button
          className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap me-3"
          style={{ border: '1px solid #F44336', color: '#F44336' }}
          // onClick={this.function()}
        >
          YES
        </button>
        <button
          className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap"
          style={{ border: '1px solid #00796B', color: '#00796B' }}
          // onClick={this.function()}
        >
          NO
        </button>
      </div>
    </>
  );
}

export default DeleteUserModal;
