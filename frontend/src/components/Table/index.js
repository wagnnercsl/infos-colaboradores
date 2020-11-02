import React from 'react';
import FiltersHeader from './filtersHeader';
import { FiLayers, FiPlusCircle, FiSearch, FiEdit2, FiTrash2, FiChevronUp, FiChevronDown, FiMoreHorizontal} from 'react-icons/fi';

const Table = ({users, tableHeaders, orderByName, handleChangeFilter, registersCount}) => (
    <div className="table-container">
        
        <FiltersHeader handleChangeFilter={handleChangeFilter} />
      <table>
        <thead>
          <tr>
            <td>
              <input className="checks" type="checkbox" onChange={check}/>
            </td>
            {
            tableHeaders.map((tableHeader, index) => (
              tableHeader !== 'IDENTIFICADOR' &&
            <td key={index}>{tableHeader} 
              {
                tableHeader.trim() === 'NOME' &&
                  <div className="chevrons-wrapper">
                  <a href="#" onClick={orderByName} type="asc">
                    <FiChevronUp />
                  </a>
                  <a href="#" onClick={orderByName} type="desc">
                    <FiChevronDown />
                  </a>
                </div>
                }
            </td>
            ))
            }
            <td>
              
            </td>
            <td>
              <a href="#">
                <FiMoreHorizontal />
              </a>
            </td>
            <td>
              
            </td>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user.identificador}>
                <td> 
                  <input className="checks" type="checkbox" />
                </td>
                <td className="nome-usuario">
                  {user.nome_usuario}
                </td>
                <td className="td-right">
                  {formatNumber(user.altura)}
                  <small>m</small>
                </td>
                <td>
                <span className={user.lactose ? 'btn-active' : 'btn'}>
                  {user.lactose ? 'Sim' : 'Não'}
                  </span>
                </td>
                <td className="td-right">
                  {formatNumber(user.peso)}
                  <small>KG</small>
                </td>
                <td>
                  <span className={user.atleta ? 'btn-active' : 'btn'}>
                  {user.atleta ? 'Sim' : 'Não'}
                  </span>
                </td>
                <td>
                  <a href="#">
                    <FiEdit2 />
                  </a>
                </td>
                <td>
                <a href="#">
                    <FiTrash2 />
                  </a>
                </td>
                <td>
                  <a href="#">
                    <FiMoreHorizontal />
                  </a>
                </td>
              </tr>
            ))
            }
        </tbody>
          <tfoot>
            <tr>
              <td><p>Total de usuários: {registersCount} </p></td>
           </tr>
          </tfoot>
      </table>
      </div>
);

function formatNumber(value) {
  var formatted = typeof(value) == 'string' ? parseFloat(Number(value.replace(',', '.'))).toFixed(2) : parseFloat(value).toFixed(2);
  return formatted.replace('.', ',');
}

function check(event) {
  const {checked} = event.target;
  
  var checks = document.getElementsByClassName('checks');
  for(var i=0; i< checks.length; i++ ){
      checks[i].checked = checked;
  }
}

export default Table;