interface props {
  onclose: () => void;
}
function Form({ onclose }: props) {
  return (
    <form>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="floatingInput" className="form-label">
          Email address
        </label>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="form-floating  mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="floatingPassword" className="form-label">
          Password
        </label>
      </div>
      <div className="form-floating  mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="floatingPassword" className="form-label">
          Confirm Password
        </label>
      </div>

      <button type="submit" className="btn btn-success " onClick={onclose}>
        Submit
      </button>
    </form>
  );
}

export default Form;
