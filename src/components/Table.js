function Table(props) {
  return (
    <table className="table__section">
      <thead className="table__section--thead">
        <tr>
          <th className="thead__categories">Nombre</th>
          <th className="thead__categories">Tutora</th>
          <th className="thead__categories">Especialidad</th>
          <th className="thead__categories">RRSS</th>
        </tr>
      </thead>
      <tbody className="table__section--tbody">{props.htmlData}</tbody>
    </table>
  );
}

export default Table;
