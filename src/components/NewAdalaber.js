function NewAdalaber(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <h2>Añadir una adalaber</h2>
        <label htmlFor="">Nombre:</label>
        <input
          className="new-contact__input"
          type="text"
          name="name"
          id="name"
          placeholder="Ej: María"
          onInput={props.handleNewContact}
          value={props.newContact.name}
        />
        <label htmlFor="">Tutora:</label>
        <input
          className="new-contact__input"
          type="text"
          name="counselor"
          id="counselor"
          placeholder="Ej: Dayana"
          onInput={props.handleNewContact}
          value={props.newContact.counselor}
        />
        <label htmlFor="">Especialidad:</label>
        <input
          className="new-contact__input"
          type="text"
          name="speciality"
          id="speciality"
          placeholder="Ej: React"
          onInput={props.handleNewContact}
          value={props.newContact.speciality}
        />
        <button onClick={props.handleClick}>Añadir una nueva Adalaber</button>
      </form>
    </>
  );
}

export default NewAdalaber;
