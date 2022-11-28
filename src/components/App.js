import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";

function App() {

  //VARIABLES ESTADO

  //Variable estado con los datos iniciales. 

  const [data, setData] = useState(contacts.results); 

  //Variable estado objeto para guardar los datos de las nuevas adalabers que quiero añadir. 

  const [newContact, setNewContact] = useState({ 
    name: '', 
    counselor: '',
    speciality: '',
  });

  //FUNCIONES

  //Función manejadora para añadir un nuevo contacto. 

  const handleNewContact = (ev) => {  
    setNewContact({ ...newContact, [ev.target.id]: ev.target.value });
  };

  //Función click para que el nuevo contacto se pinte en la tabla 

  const handleClick = (ev) => {  
    ev.preventDefault(); //no queremos que se recargue la página. 
    console.log(data.results);
    data.push(newContact);
    setData([...data]);
  };

  //Fución para pintar en el HTML la lista de contactos. 

  const htmlData = data.map((oneContact, index) => {
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
      <form action="">
        <h2>Añadir una adalaber</h2>
        <label htmlFor="">Nombre:</label>
        <input className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Ej: María"
            onInput={handleNewContact}
             />
        <label htmlFor="">Tutora:</label>
        <input className="new-contact__input"
            type="text"
            name="counselor"
            id="counselor"
            placeholder="Ej: Dayana"
            onInput={handleNewContact}
             />
        <label htmlFor="">Especialidad:</label>
        <input className="new-contact__input"
            type="text"
            name="speciality"
            id="speciality"
            placeholder="Ej: React"
            onInput={handleNewContact}
             />
        <button onClick={handleClick}>Añadir una nueva Adalaber</button>
      </form>
    </div>
  );
}

export default App;
