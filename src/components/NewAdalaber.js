function NewAdalaber(props) {
  return (
    <>
      <h2 className="add__title">Añadir una adalaber</h2>
      <form className="add__form" onSubmit={props.handleSubmit}>
        <label className="add__form--label" htmlFor="">Nombre:</label>
        <input
          className="add__form--input"
          type="text"
          name="name"
          id="name"
          placeholder="Ej: María"
          onInput={props.handleNewContact}
          value={props.newContact.name}
        />
        <label className="add__form--label" htmlFor="">Tutora:</label>
        <input
          className="add__form--input"
          type="text"
          name="counselor"
          id="counselor"
          placeholder="Ej: Dayana"
          onInput={props.handleNewContact}
          value={props.newContact.counselor}
        />
        <label className="add__form--label" htmlFor="">Especialidad:</label>
        <input
          className="add__form--input"
          type="text"
          name="speciality"
          id="speciality"
          placeholder="Ej: React"
          onInput={props.handleNewContact}
          value={props.newContact.speciality}
        />
        <button className="add__form--button" onClick={props.handleClick}>Añadir una nueva Adalaber</button>
      </form>
    </>
  );
}

export default NewAdalaber;
