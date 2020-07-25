import React, { useState } from 'react';

export default function FiltroDescricao({ onNovo, onBuscar }) {
  const [textoBuscar, setTextoBuscar] = useState('');

  const handleNovoClick = () => {
    onNovo();
  };

  const handleBuscar = (event) => {
    setTextoBuscar(event.target.value);
    onBuscar(event.target.value);
  };

  return (
    <div style={styles.container}>
      <div>
        <button
          style={{ zIndex: 0 }}
          id="btnBuscar"
          className="waves-effect waves-light btn-large"
          onClick={handleNovoClick}
          disabled={textoBuscar}
        >
          + NOVO LANCAMENTO
        </button>
      </div>
      <div className="input-field" style={styles.filtro}>
        <input
          placeholder="Filtro"
          id="filtro"
          type="text"
          onChange={handleBuscar}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 5px',
    marginTop: '10px',
    alignItems: 'center',
  },
  filtro: {
    width: '100%',
    marginLeft: '15px',
  },
};
