import { useState } from "react"
import contacts from "../contacts.json"




function Contacts() {
    const [allContacts, setContacts] = useState(contacts.slice(0,5))

    const addContactsRandom = () => {
      
     if (contacts.length === allContacts.length){
      console.log("no hay mas contactos que añadir");
      return
     }

     const numRandom = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[numRandom];

    let isDuplicated = false;
    allContacts.forEach((eachContact) => {
      if (eachContact.id === randomContact.id) {
        isDuplicated = true;
      }
    });

    if (isDuplicated === true) {
      console.log("ya esta en la lista");
      addContactsRandom();
      return;
    }


    const clonarContacts = JSON.parse(JSON.stringify(allContacts));
    clonarContacts.push(randomContact);
    setContacts(clonarContacts);
    }

    const ordenarPorPopularidad = () => {
      const clonarContacts = JSON.parse(JSON.stringify(allContacts));
      const ordenarContactos = clonarContacts.sort((element2, element1)=>{
        return element2.popularity < element1.popularity ? 1 : -1
      })
      setContacts(ordenarContactos)
    }

    return (
    <div>
     <button onClick={addContactsRandom}>
      Añade más
      </button>
      <button  onClick={ordenarPorPopularidad}>
      Ordena por Popularidad
      </button>




      {allContacts.map((eachContact, index) =>{
      return(
        <div key={eachContact.id}>
        <h1>IronContacts</h1>
          <img src={eachContact.pictureUrl} />
          <h3>{eachContact.name}</h3>
          <h3>{eachContact.popularity}</h3>
          {eachContact.wonOscar === true ? <p>Won a Oscar: 🏆</p> : "" }
          {eachContact.wonEmmy === true ? <p>Won a Emmy: 🏆</p> : "" }

        </div>
      )
    })}
    </div>
  )
}

export default Contacts