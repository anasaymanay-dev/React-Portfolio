import "./model.css";

export default function Model({ closeModel }) {
  return (
    <div className="overlay" onClick={closeModel}>
      <div className="contact-form" onClick={(e) => e.stopPropagation()}>
        <h2>Hire Me</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="budjet">Budget</label>
            <select id="budget" name="budget">
              <option selected disabled>
                Your Budget
              </option>
              <option>Less Than 300$</option>
              <option>Between 300$ - 500$</option>
              <option>Between 500$ - 1000$</option>
              <option>Greather Than 1000$</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Describe your project, timeline, and budget..."
            ></textarea>
          </div>

          <div className="buttons">
            <button type="submit" className="send">
              Send
            </button>
            <button type="button" className="cancel" onClick={closeModel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
