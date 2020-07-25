import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function LancamentoModal({ obj, opcao, onSave, onClose }) {
  const initialLancamento = {
    _id: null,
    description: '',
    value: '',
    category: '',
    year: '',
    month: '',
    day: '',
    yearMonth: '',
    yearMonthDay: '',
    type: '-',
  };
  const [lancamentoCorrente, setLancamentoCorrente] = useState(
    'initialLancamento'
  );
  const [validado, setValidado] = useState(false);

  /**
   * Evento para monitorar a tecla Esc, através de keydown
   */
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    // Eliminando evento
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    opcao
      ? setLancamentoCorrente(obj)
      : setLancamentoCorrente(initialLancamento);
  }, [opcao]);

  /**
   * Cercando a tecla "Esc"
   * e fechando a modal caso
   * seja digitada
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose(null);
    }
  };

  const handleModalClose = () => {
    onClose(null);
  };

  const handleTipoLancamento = (event) => {
    setLancamentoCorrente({ type: event.target.value });
  };

  const handleValida = () => {
    if (
      document.getElementById('txtDescription').value === '' ||
      document.getElementById('txtCategory').value === '' ||
      document.getElementById('txtValue').value === '' ||
      document.getElementById('txtData').value === ''
    ) {
      setValidado(false);
    } else {
      setValidado(true);
    }
  };

  const handleSalvar = () => {
    const newId = opcao ? lancamentoCorrente._id : null;
    const data = document.getElementById('txtData').value;
    const newLancamento = {
      _id: newId,
      description: document.getElementById('txtDescription').value,
      value: document.getElementById('txtValue').value,
      category: document.getElementById('txtCategory').value,
      year: parseInt(data.substring(0, 4)),
      month: parseInt(data.substring(5, 7)),
      day: parseInt(data.substring(8, 10)),
      yearMonth: data.substring(0, 7),
      yearMonthDay: data,
      type: document.querySelector('input[name=group1]:checked').value,
    };
    onSave(newLancamento);
  };

  return (
    <div>
      <Modal isOpen={true}>
        <div style={styles.flexRow}>
          <span style={styles.title}>Lançamento</span>
          <button
            className="waves-effect waves-lights btn red dark-4"
            onClick={handleModalClose}
          >
            X
          </button>
        </div>
        <form>
          <div style={styles.container}>
            <div>
              <div style={styles.radio}>
                <p>
                  <label>
                    <input
                      name="group1"
                      type="radio"
                      value="-"
                      disabled={opcao}
                      id="radioDespesa"
                      checked={lancamentoCorrente.type === '-'}
                      onChange={handleTipoLancamento}
                    />
                    <span style={styles.radioItens}>Despesas</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="group1"
                      type="radio"
                      value="+"
                      id="radioReceita"
                      disabled={opcao}
                      checked={lancamentoCorrente.type === '+'}
                      onChange={handleTipoLancamento}
                    />
                    <span style={styles.radioItens}>Receitas</span>
                  </label>
                </p>
              </div>
              <label className="active" htmlFor="inputGrade">
                Descrição:
              </label>
              <input
                type="text"
                defaultValue={lancamentoCorrente.description}
                name=""
                id="txtDescription"
                onChange={handleValida}
              />
              <label className="active" htmlFor="inputGrade">
                Categoria:
              </label>
              <input
                type="text"
                defaultValue={lancamentoCorrente.category}
                name=""
                id="txtCategory"
                onChange={handleValida}
              />
              <div className="row" style={styles.flexRow}>
                <div className="input-field col s12">
                  <input
                    type="number"
                    defaultValue={lancamentoCorrente.value}
                    min="0"
                    step="0.01"
                    name=""
                    id="txtValue"
                    onChange={handleValida}
                  />
                  <label className="active" htmlFor="inputGrade">
                    Valor:
                  </label>
                </div>
                <input
                  placeholder="Data"
                  defaultValue={lancamentoCorrente.yearMonthDay}
                  type="date"
                  name=""
                  id="txtData"
                  onChange={handleValida}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="waves-effect waves-ligth btn"
            onClick={handleSalvar}
            disabled={!validado}
          >
            Salvar
          </button>
        </form>
      </Modal>
    </div>
  );
}
const styles = {
  container: {
    border: '1px solid lightgrey',
    borderRadius: '4px',
    padding: '15px',
    marginBottom: '20px',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },

  title: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  radio: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  radioItens: {
    marginLeft: '25px',
    fontSize: '1.5rem',
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
