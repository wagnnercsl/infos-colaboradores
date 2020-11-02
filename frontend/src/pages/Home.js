import React, {useState, useEffect} from 'react';
import { FiEdit2, FiTrash2, FiChevronUp, FiChevronDown, FiMoreHorizontal, FiSearch} from 'react-icons/fi';
import './styles.css';
import api from '../services/api';

import Table from '../components/Table';
import formatTable from '../utils/formatTable';

function App() {

  const [users, setUsers] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [filter, setFilter] = useState('');
  const [registersCount, setRegistersCount] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    api.get('/')
      .then(response => {
        setUsers(response.data);
        setTableHeaders(formatTable.formatTableHeaders(response.data[0]));
        setRegistersCount(response.data.length);
      })
  }, []);

  useEffect(() => {
    getFilteredPerson(filter);
  }, [filter]);

  function handleChangeSearchName(event) {
    const actualName = event.target.value;
    setSearchName(actualName);
  }

  function orderByName(event) {
    const orderType = event.target.type;
      api.get('/', {params: {
        order: orderType
      }})
        .then(response => {
          setUsers(response.data);
        });
  }

  function getFilteredPerson() {
    api.get('/', {params: {
      filter
    }})
      .then(response => {
        setUsers(response.data);
      });
  }

  function handleChangeFilter(event) {
    const inputFilter = event.target.value;
    setFilter(inputFilter);
}

  return (
    <> 
      <Table users={users} 
      tableHeaders={tableHeaders} 
      orderByName={orderByName} 
      handleChangeFilter={handleChangeFilter}
      handleChangeSearchName={handleChangeSearchName}
      registersCount={registersCount}
      />
    </>
  );
}



/*
arrows para order by depois
<td className="chevrons">
                  <FiChevronUp />
                  <FiChevronDown />
                </td>
*/

export default App;
