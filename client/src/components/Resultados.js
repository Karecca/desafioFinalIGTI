import React, { useState, useEffect } from 'react';
import SeletorMeses from './SeletorMeses';
import Totais from './resultados/Totais';
import FiltroDescricao from './resultados/FiltroDescricao';
import Grid from './resultados/Grid';
import Spinner from './Spinner';
import LancamentoModal from './resultados/LancamentoModal';
import * as api from '../services/LancamentoService';

export default function Resultados() {
  const [lancamento, setLancamento] = useState();
  const [pacoteDados, setPacoteDados] = useState();
  const [txtFilter, setTxtFilter] = useState('');
  const [periodo, setPeriodo] = useState('2020-07');
  const [itemParaEdicao, setItemParaEdicao] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdicao, setIsEdicao] = useState(false);

  const getLancamentos = async (period) => {
    const dados = await api.get(period);
    setPeriodo(period);
    const dadosCompletos = dados.data
      .map((item) => {
        const {
          _id,
          description,
          value,
          category,
          year,
          month,
          day,
          yearMonth,
          yearMonthDay,
          type,
        } = item;
        return {
          _id,
          description,
          descriptionFilter: description.toLowerCase(),
          value,
          category,
          year,
          month,
          day,
          yearMonth,
          yearMonthDay,
          type,
        };
      })
      .sort((l1, l2) => l1.day - l2.day);
    setPacoteDados(dadosCompletos);
  };

  const updateLancamento = async (id, newLancamento) => {
    await api.update(id, newLancamento);
    getLancamentos(newLancamento.yearMonth);
  };

  const createLancamento = async (newLancamento) => {
    await api.create(newLancamento);
    getLancamentos(newLancamento.yearMonth);
  };

  useEffect(() => {
    let filtrados = [];
    if (pacoteDados) {
      filtrados = pacoteDados.filter((item) =>
        item.descriptionFilter.includes(txtFilter)
      );
      setLancamento(filtrados);
    }
  }, [txtFilter, pacoteDados]);

  const handlePersistData = (props) => {
    if (props._id) {
      //put
      setPeriodo(props.yearMonth);
      updateLancamento(props._id, props);
    } else {
      //post
      setPeriodo(props.yearMonth);
      createLancamento(props);
    }
  };

  const handleNovo = () => {
    setIsEdicao(false);
    setIsModalOpen(true);
  };

  const handleBuscar = (props) => {
    setTxtFilter(props);
  };

  const handleEdit = (props) => {
    const id = props;
    setItemParaEdicao(lancamento.find((item) => item._id === id));
    setIsEdicao(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (props) => {
    const { _id, yearMonth } = props;
    await api.remove(_id);
    getLancamentos(yearMonth);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SeletorMeses newPeriodo={periodo} onChangePeriod={getLancamentos} />
      {!lancamento && <Spinner />}

      {lancamento && (
        <div>
          <Totais lancamento={lancamento} />
          <FiltroDescricao onNovo={handleNovo} onBuscar={handleBuscar} />
          <Grid
            lancamento={lancamento}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      )}
      {isModalOpen && (
        <LancamentoModal
          obj={itemParaEdicao}
          opcao={isEdicao}
          onSave={handlePersistData}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
