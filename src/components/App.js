import "../styles/App.scss";
// import contacts from "../data/contacts.json";
import { useState, useEffect } from "react";
import callToApi from "../services/api";
import ls from "../services/localstorage";

function App() {
  //VARIABLES ESTADO

  //Variable estado con los datos iniciales.

  const [data, setData] = useState(ls.get("data", []));

  //Variable estado objeto para guardar los datos de las nuevas adalabers que quiero añadir.

  const [newContact, setNewContact] = useState({
    name: "",
    counselor: "",
    speciality: "",
  });

  //Variable estado para filtrar los elementos a través del buscador

  const [search, setSearch] = useState(ls.get("search", ""));

  //Variable estado para filtrar los elementos a través del select

  const [searchCounselor, setSearchCounselor] = useState("");

  //USE EFFECT

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  //FUNCIONES

  //Función manejadora para añadir un nuevo contacto.

  const handleNewContact = (ev) => {
    setNewContact({ ...newContact, [ev.target.id]: ev.target.value });
  };

  //Función click para que el nuevo contacto se pinte en la tabla

  const handleClick = (ev) => {
    ev.preventDefault(); //no queremos que se recargue la página.
    setData([...data, newContact]);
    setNewContact({
      //ESTO PARA QUE CUANDO HAGAMOS CLICK SE BORRE LO QUE HEMOS ESCRITO.
      name: "",
      counselor: "",
      speciality: "",
    });
  };

  //Función handle para que no se nos envie el formulario al hacer click:

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  //Función para filtrar

  //Función para filtrar en el buscador

  const handleSearch = (ev) => {
    ls.set("search", ev.target.value);
    setSearch(ev.target.value);
  };

  //Función para filtrar en el select

  const handleSearchCounselor = (ev) => {
    setSearchCounselor(ev.target.value);
  };

  //Fución para pintar en el HTML la lista de contactos.

  const htmlData = data

    .filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.counselor.toLowerCase().includes(search.toLowerCase())
    )

    .filter((contact) => {
      return searchCounselor === '' ? true : contact.counselor.toLowerCase() ===
      searchCounselor.toLowerCase();
    })

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
      <header>
        <h1>Adalabers</h1>
      </header>

      <main>
        <form action="">
          <label htmlFor="">Nombre:</label>
          <input
            className="new-contact__input"
            type="text"
            name="search"
            id="search"
            placeholder="Ej: María"
            onInput={handleSearch}
            value={search}
          />
          <label htmlFor="">Escoge una tutora:</label>
          <select onChange={handleSearchCounselor} value={searchCounselor}>
            <option value="">Escoge una opción</option>
            <option value="yanelis">Yanelis</option>
            <option value="dayana">Dayana </option>
            <option value="iván">Iván</option>
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
        <form onSubmit={handleSubmit}>
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
      </main>
    </div>
  );
}

export default App;
