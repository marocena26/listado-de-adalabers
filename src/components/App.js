import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";

function App() {
  //VARIABLES ESTADO

  //Variable estado con los datos iniciales.

  const [data, setData] = useState(contacts.results);

  //Variable estado objeto para guardar los datos de las nuevas adalabers que quiero añadir.

  const [newContact, setNewContact] = useState({
    name: "",
    counselor: "",
    speciality: "",
  });

  //Variable estado para filtrar los elementos

  const [search, setSearch] = useState('')

  //FUNCIONES

  //Función manejadora para añadir un nuevo contacto.

  const handleNewContact = (ev) => {
    setNewContact({ ...newContact, [ev.target.id]: ev.target.value });
  };

  //Función click para que el nuevo contacto se pinte en la tabla

  const handleClick = (ev) => {
    ev.preventDefault(); //no queremos que se recargue la página.
    console.log(data.results);
    setData([...data, newContact]);
    setNewContact({
      //ESTO PARA QUE CUANDO HAGAMOS CLICK SE BORRE LO QUE HEMOS ESCRITO.
      name: "",
      counselor: "",
      speciality: "",
    });
  };

  //Función para filtrar

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  //Fución para pintar en el HTML la lista de contactos.

  const htmlData = data
  .filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.counselor.toLowerCase().includes(search.toLowerCase())
  )
  .map((oneContact, index) => {
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
      <h1>Adalabers</h1>
      <form action="">
        <label htmlFor="">Nombre:</label>
        <input
          className="new-contact__input"
          type="text"
          name="search"
          id="search"
          placeholder="Ej: María"
          onInput={handleSearch}
        />
        <label htmlFor="">Escoge una tutora:</label>
        <select onClick={handleSearch}>
          <option value="select">Escoge una opción</option>
          <option>Yanelis</option>
          <option>Dayana </option>
          <option>Iván</option>
        </select>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>{htmlData}</tbody>
      </table>
      <form action="">
        <h2>Añadir una adalaber</h2>
        <label htmlFor="">Nombre:</label>
        <input
          className="new-contact__input"
          type="text"
          name="name"
          id="name"
          placeholder="Ej: María"
          onInput={handleNewContact}
          value={newContact.name}
        />
        <label htmlFor="">Tutora:</label>
        <input
          className="new-contact__input"
          type="text"
          name="counselor"
          id="counselor"
          placeholder="Ej: Dayana"
          onInput={handleNewContact}
          value={newContact.counselor}
        />
        <label htmlFor="">Especialidad:</label>
        <input
          className="new-contact__input"
          type="text"
          name="speciality"
          id="speciality"
          placeholder="Ej: React"
          onInput={handleNewContact}
          value={newContact.speciality}
        />
        <button onClick={handleClick}>Añadir una nueva Adalaber</button>
      </form>
    </div>
  );
}

export default App;
