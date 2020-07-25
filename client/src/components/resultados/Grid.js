import React from 'react';
import LancamentoItem from './LancamentoItem';

export default function Grid({ lancamento, onDelete, onEdit }) {
  const objeto = lancamento;

  const handleEdit = (props) => {
    const _id = props;
    onEdit(_id);
  };

  const handleDelete = (props) => {
    const { _id, yearMonth } = props;
    onDelete({ _id, yearMonth });
  };

  return (
    <div>
      {objeto &&
        objeto.map((objeto, index) => {
          return (
            <LancamentoItem
              dados={objeto}
              key={index}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          );
        })}
    </div>
  );
}
