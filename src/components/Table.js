function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
          <th>RRSS</th>
        </tr>
      </thead>
      <tbody>{props.htmlData}</tbody>
    </table>
  );
}

export default Table;
