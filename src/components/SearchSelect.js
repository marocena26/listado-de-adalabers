function SearchSelect(props) {
  return (
    <>
      <label htmlFor="">Escoge una tutora:</label>
      <select onChange={props.handleSearchCounselor} value={props.searchCounselor}>
        <option value="">Escoge una opción</option>
        <option value="yanelis">Yanelis</option>
        <option value="dayana">Dayana </option>
        <option value="iván">Iván</option>
      </select>
    </>
  );
}

export default SearchSelect;
