function SearchForm(props) {
  return (
    <>
      <label className="form__section--label" htmlFor="">
        Nombre:
      </label>
      <input
        className="form__section--input"
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
