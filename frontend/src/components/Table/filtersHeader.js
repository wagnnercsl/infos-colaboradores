import React, {useState} from 'react';
import { FiLayers, FiPlusCircle, FiSearch } from 'react-icons/fi';

const FiltersHeader = ({handleChangeFilter}) => {

    return (
        <>
    <div className="search-container">
        <FiLayers style={{marginRight:'50px'}}/>
        <span id="search">
        <FiSearch />
        <input type={"text"} placeholder="Pesquisar" />
        </span>

        <span id="new-user">
        <a href="#">Novo usuário
        <FiPlusCircle />
        </a>
        </span>
    </div>
    <div className="filters-container">
        <div>
            <p className="filter-title">Peso</p>
          <input name="filter" type="radio" value="above" onChange={handleChangeFilter}/> Acima do peso
          <input name="filter" type="radio" value="ideal" onChange={handleChangeFilter}/> Peso ideal
          <input name="filter" type="radio" value="below" onChange={handleChangeFilter}/> Abaixo do peso
        </div>
        
        <div>
            <p className="filter-title">Altura</p>
          <input name="filter" type="radio" value="tall" onChange={handleChangeFilter}/> Altos
          <input name="filter" type="radio" value="medium" onChange={handleChangeFilter}/> Medianos
          <input name="filter" type="radio" value="small" onChange={handleChangeFilter}/> Baixos
        </div>

        <div>
            <p className="filter-title">Lactose</p>
          <input name="filter" type="radio" value="lactose" onChange={handleChangeFilter}/> Sim
        </div>

        <div>
            <p className="filter-title">Atleta</p>
          <input name="filter" type="radio" value="athlete" onChange={handleChangeFilter}/> Sim
        </div>
        
    </div>
    </>
    )
};

export default FiltersHeader;