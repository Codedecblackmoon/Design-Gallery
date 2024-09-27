import NewButton from "./Newbutton";

function Intro() {
  return (
    <>
      <div className="intro">
        <h2 id="second_tital">Why Us</h2>
        <p>
          Hello! I’d like to introduce you to Design Gallery, a fantastic
          platform tailored for graphic designers. It offers a streamlined way
          to organize and manage your design assets, allowing you to save your
          images, typography, templates in one convenient location. No more
          wasting time sifting through folders! With smart tagging and
          categorization, you can find what you need in an instant, boosting
          your productivity.
        </p>

        <p>
          But that’s not all! Design Gallery also enhances collaboration within
          teams. Its easy sharing features let you present your work to clients
          or colleagues and receive realtime feedback. Plus, sharing assets
          across projects ensures consistency in your designs. Using Design
          Gallery can truly elevate your workflow and help you create stunning
          designs more efficiently!
        </p>
        <NewButton></NewButton>
      </div>
    </>
  );
}

export default Intro;
