import { useState } from 'react';
import allContacts from './contacts.json';

function getFirstFive(contacts){
    let fiveContacts = [];
    for(let i=0; i<5; i++){
        fiveContacts.push(contacts[i])
    }
    return fiveContacts;
}

function Table(){
    let firstFive = getFirstFive(allContacts);
    // const [contact, setContacts] = useState(contacts);

    for(let i=0; i<5; i++){

    }

    return(
        
    <table className='contacts'>
    {firstFive.map((contact) => <ContactRow contact={movie} key={movie._id} deleteHandler={() => deleteMovie(movie._id)} />)}
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
       
      </table>)
}

export default Table;