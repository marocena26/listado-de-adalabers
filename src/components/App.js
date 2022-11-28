import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(contacts); //aqui guardamos datos iniciales, cuando cambien se irán renderizando. Como queremos obtener el valor de contacts, pues en el useState le pasamos contacts.
  console.log(data);


  //Fución para pintar en el HTML. 
  const htmlData = data.results.map((oneContact, index) => {
    return (
      <tr key={index}>
        <td>{oneContact.name}</td>
        <td>{oneContact.counselor}</td>
        <td>{oneContact.speciality}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
        {htmlData}
        </tbody>
      </table>
    </div>
  );
}

export default App;
