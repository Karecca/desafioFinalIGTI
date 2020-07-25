import React, { useEffect, useState } from 'react';

export default function SeletorMeses({ newPeriodo, onChangePeriod }) {
  const selecao = document.getElementById('seletorPeriodo');
  const [periodo, setPeriodo] = useState(newPeriodo);

  const handleSelectorChange = (event) => {
    const period = event.target.value;
    onChangePeriod(period);
  };

  useEffect(() => {
    setPeriodo(newPeriodo);
  }, [newPeriodo]);

  useEffect(() => {
    onChangePeriod(periodo);
  }, [periodo]);

  const decPeriod = () => {
    selecao.selectedIndex -= 1;
    setPeriodo(selecao.value);
  };
  const incPeriod = () => {
    selecao.selectedIndex += 1;
    setPeriodo(selecao.value);
  };

  return (
    <div className="center">
      <h5>Controle Financeiro Pessoal</h5>
      <div style={styles.container}>
        <button
          style={styles.button}
          className="waves-effect waves-light btn"
          onClick={decPeriod}
        >
          &lt;
        </button>
        <select
          className="browser-default"
          style={styles.seletor}
          id="seletorPeriodo"
          defaultValue={periodo}
          onChange={handleSelectorChange}
        >
          <option key="0" value="2019-01">
            Jan/2019
          </option>
          <option key="1" value="2019-02">
            Fev/2019
          </option>
          <option key="2" value="2019-03">
            Mar/2019
          </option>
          <option key="3" value="2019-04">
            Abr/2019
          </option>
          <option key="4" value="2019-05">
            Mai/2019
          </option>
          <option key="5" value="2019-06">
            Jun/2019
          </option>
          <option key="6" value="2019-07">
            Jul/2019
          </option>
          <option key="7" value="2019-08">
            Ago/2019
          </option>
          <option key="8" value="2019-09">
            Set/2019
          </option>
          <option key="9" value="2019-10">
            Out/2019
          </option>
          <option key="10" value="2019-11">
            Nov/2019
          </option>
          <option key="11" value="2019-12">
            Dez/2019
          </option>
          <option key="12" value="2020-01">
            Jan/2020
          </option>
          <option key="13" value="2020-02">
            Fev/2020
          </option>
          <option key="14" value="2020-03">
            Mar/2020
          </option>
          <option key="15" value="2020-04">
            Abr/2020
          </option>
          <option key="16" value="2020-05">
            Mai/2020
          </option>
          <option key="17" value="2020-06">
            Jun/2020
          </option>
          <option key="18" value="2020-07">
            Jul/2020
          </option>
          <option key="19" value="2020-08">
            Ago/2020
          </option>
          <option key="20" value="2020-09">
            Set/2020
          </option>
          <option key="21" value="2020-10">
            Out/2020
          </option>
          <option key="22" value="2020-11">
            Nov/2020
          </option>
          <option key="23" value="2020-12">
            Dez/2020
          </option>
          <option key="24" value="2021-01">
            Jan/2021
          </option>
          <option key="25" value="2021-02">
            Fev/2021
          </option>
          <option key="26" value="2021-03">
            Mar/2021
          </option>
          <option key="27" value="2021-04">
            Abr/2021
          </option>
          <option key="28" value="2021-05">
            Mai/2021
          </option>
          <option key="29" value="2021-06">
            Jun/2021
          </option>
          <option key="30" value="2021-07">
            Jul/2021
          </option>
          <option key="31" value="2021-08">
            Ago/2021
          </option>
          <option key="32" value="2021-09">
            Set/2021
          </option>
          <option key="33" value="2021-10">
            Out/2021
          </option>
          <option key="34" value="2021-11">
            Nov/2021
          </option>
          <option key="35" value="2021-12">
            Dez/2021
          </option>
        </select>
        <button
          style={styles.button}
          className="waves-effect waves-light btn"
          onClick={incPeriod}
        >
          >
        </button>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginLeft: '5px',
    marginRight: '5px',
    fontWeight: 'bold',
    zIndex: 0,
  },
  seletor: {
    width: '150px',
    margin: '0 15px',
  },
};
