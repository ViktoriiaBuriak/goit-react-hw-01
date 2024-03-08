import css from "./TransactionHistoryParams.module.css";

const TransactionHistoryParams = ({ type, amount, currency }) => {
  return (
    <tr className={css.tableList}>
      <td className={`${css.tableValue} ${css.tableType}`}>{type}</td>
      <td className={css.tableValue}>{amount}</td>
      <td className={css.tableValue}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryParams;
