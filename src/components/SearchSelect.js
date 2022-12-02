function SearchSelect(props) {
  return (
    <>
      <label className="form__section--label" htmlFor="">
        Escoge una tutora:
      </label>
      <select
        className="form__section--select"
        onChange={props.handleSearchCounselor}
        value={props.searchCounselor}
      >
        <option value="">Escoge una opción</option>
        <option value="yanelis">Yanelis</option>
        <option value="dayana">Dayana </option>
        <option value="iván">Iván</option>
      </select>
    </>
  );
}

export default SearchSelect;
