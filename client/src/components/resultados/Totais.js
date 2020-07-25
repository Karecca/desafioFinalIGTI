import React from 'react';
import { formatMoney } from '../helpers/format';

export default function Totais({ lancamento }) {
  const dados = lancamento;
  let lancamentos = 0;
  let receitas = 0;
  let despesas = 0;
  let saldo = 0;

  function totais() {
    lancamentos = dados.length;
    dados.map(({ value, type }) => {
      if (type === '-') {
        despesas += value;
      } else {
        receitas += value;
      }
      return { receitas, despesas };
    });
    saldo = receitas - despesas;
  }

  dados && totais();
  return (
    <div style={styles.totais}>
      <span style={styles.itens}>Lançamentos: {lancamentos}</span>
      <span style={styles.itens}>Receitas: {formatMoney(receitas)}</span>
      <span style={styles.itens}>Despesas: {formatMoney(despesas)}</span>
      <span style={styles.itens}>Saldo: {formatMoney(saldo)}</span>
    </div>
  );
}

const styles = {
  totais: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '8px 10px',
    border: '1px solid #BDBDBD',
    borderRadius: '4px',
    backgroundColor: '#EFFBF5',
  },
  itens: {
    fontWeight: 'bold',
  },
};
