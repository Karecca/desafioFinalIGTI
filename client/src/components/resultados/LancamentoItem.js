import React from 'react';
import { formatMoney, formatDay } from '../helpers/format';

export default function LancamentoItem({ dados, onDelete, onEdit }) {
  const { _id, day, category, description, value, type, yearMonth } = dados;

  const handleEditClick = () => {
    onEdit(_id);
  };

  const handleDeleteClick = () => {
    onDelete({ _id, yearMonth });
  };

  return (
    <div style={type === '-' ? styles.negativo : styles.positivo}>
      <span style={styles.dia}>{formatDay(day)}</span>
      <div style={styles.container}>
        <div style={styles.description}>
          <span style={styles.category}>{category}</span>
          <span>{description}</span>
        </div>
        <span style={styles.valor}>{formatMoney(value)}</span>
      </div>
      <div style={styles.comando}>
        <span
          style={styles.icones}
          className="material-icons"
          onClick={handleEditClick}
        >
          edit
        </span>
        <span
          style={styles.icones}
          className="material-icons"
          onClick={handleDeleteClick}
        >
          delete
        </span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    width: '100%',
  },
  positivo: {
    backgroundColor: '#A1F0DC',
    display: 'flex',
    borderRadius: '4px',
    alignItems: 'center',
    padding: '10px',
    margin: '5px',
  },
  negativo: {
    backgroundColor: '#F0A1A8',
    display: 'flex',
    borderRadius: '4px',
    alignItems: 'center',
    padding: '10px',
    margin: '5px',
  },
  dia: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
    width: '80%',
  },
  category: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  valor: {
    fontSize: '1.5rem',
    textAlign: 'right',
  },
  comando: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10px',
  },
  icones: {
    fontSize: '1.4rem',
    cursor: 'pointer',
    marginLeft: '10px',
  },
};
