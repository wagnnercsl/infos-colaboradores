import React, {useState, useEffect} from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import api from '../services/api';

function App() {

  const [users, setUsers] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    api.get('/')
      .then(response => {
        setUsers(response.data);
        setTableHeaders(formatTableHeaders(response.data[0]));
        console.log(users);
      })
  }, []);

  function formatTableHeaders(objectHeaders) {
    //console.log(objectHeaders);
    var keys = Object.keys(objectHeaders);
    //console.log(keys);
    var formatted = keys.map(header => {
      var data = header.replace('_', ' ').toUpperCase();
      return data;
    });
    return formatted;
  }

  //getUsers();
  //console.log(Object.keys(users[0]));

  return (
    <div className="App">

      <table>
        <thead>
          <tr>
            {
            tableHeaders.map((tableHeader, index) => (
            <td key={index}>{tableHeader}</td>
            ))
            }
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user.identificador}>
                <td>
                  {user.identificador}
                </td>
                <td>
                  {user.nome_usuario}
                </td>
                <td>
                  {user.altura}
                </td>
                <td>
                  {user.lactose ? 'Sim' : 'Não'}
                </td>
                <td>
                  {user.peso}
                </td>
                <td>
                  {user.atleta ? 'Sim' : 'Não'}
                </td>
                <td>
                  <FiEdit2 />
                </td>
                <td>
                  <FiTrash2 />
                </td>
              </tr>
            ))
            }
        </tbody>
      </table>

    </div>
  );
}

export default App;
