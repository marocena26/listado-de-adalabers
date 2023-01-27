import "../styles/App.scss";

// import contacts from "../data/contacts.json";
import { useState, useEffect } from "react";
import callToApi from "../services/api";
import ls from "../services/localstorage";
import Header from "./Header";
import SearchForm from "./SearchForm";
import SearchSelect from "./SearchSelect";
import NewAdalaber from "./NewAdalaber";
import Table from "./Table";

function App() {
  //VARIABLES ESTADO

  //Variable estado con los datos iniciales.

  const [data, setData] = useState(ls.get("data", []));

  //Variable estado objeto para guardar los datos de las nuevas adalabers que quiero añadir.

  const [newContact, setNewContact] = useState({
    id: crypto.randomUUID(),
    name: "",
    counselor: "",
    speciality: "",
    social_networks: [],
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
    //Validación del input para añadir una nueva adalaber
    if (
      newContact.name !== "" &&
      newContact.counselor !== "" &&
      newContact.speciality !== ""
    ) {
      ev.preventDefault(); //no queremos que se recargue la página.
      setData([...data, newContact]);
      setNewContact({
        //ESTO PARA QUE CUANDO HAGAMOS CLICK SE BORRE LO QUE HEMOS ESCRITO.
        name: "",
        counselor: "",
        speciality: "",
      });
    }
  };

  //Función handle para que no se nos envie el formulario al hacer click:

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  //Función para filtrar

  //Función para filtrar en el buscador

  const handleSearchName = (ev) => {
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
      return searchCounselor === ""
        ? true
        : contact.counselor.toLowerCase() === searchCounselor.toLowerCase();
    })

    .map((contact) => {
      return (
        <tr key={contact.id}>
          <td className="table__section--tbody--td">{contact.name}</td>
          <td className="table__section--tbody--td">{contact.counselor}</td>
          <td className="table__section--tbody--td">{contact.speciality}</td>
          <td className="table__section--tbody--td">
            {contact.social_networks.map((search, index) => {
              if (search.name === "GitHub") {
                return (
                  <span className="td__list" key={index}>
                    <a
                      className="td__list--link"
                      href={search.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github-alt"></i>
                    </a>{" "}
                  </span>
                );
              } else if (search.name === "LinkedIn") {
                return (
                  <span className="td__list" key={index}>
                    <a
                      className="td__list--link"
                      href={search.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>{" "}
                  </span>
                );
              } else if (search.name === "Twitter") {
                return (
                  <span className="td__list" key={index}>
                    <a
                      className="td__list--link"
                      href={search.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>{" "}
                  </span>
                );
              } else {
                return null;
              }
            })}
          </td>
        </tr>
      );
    });

  return (
    <div className="app">
      <Header></Header>

      <main className="main">
        <section className="form">
          <form className="form__section">
            <SearchForm
              handleSearchName={handleSearchName}
              search={search}
            ></SearchForm>
            <SearchSelect
              handleSearchCounselor={handleSearchCounselor}
              searchCounselor={searchCounselor}
            ></SearchSelect>
          </form>
        </section>

        <section className="table">
          <Table htmlData={htmlData}></Table>
        </section>

        <section className="add">
          <NewAdalaber
            handleSubmit={handleSubmit}
            handleNewContact={handleNewContact}
            newContact={newContact}
            handleClick={handleClick}
          ></NewAdalaber>
        </section>
      </main>
    </div>
  );
}

export default App;
