function SearchForm(props) {
    
  return (
    <>
      <label htmlFor="">Nombre:</label>
      <input
        className="new-contact__input"
        type="text"
        name="search"
        id="search"
        placeholder="Ej: María"
        onInput={props.handleSearchName}
        value={props.search}
      />
    </>
  );
}

export default SearchForm;
