interface props {
    onclick: () => void;
  }
  const NewButton = ({ onclick }: props) => {
    return (
      <button type="button" className="btn btn-success ll" onClick={onclick}>
        Login
      </button>
    );
  };
  
  export default NewButton;
  