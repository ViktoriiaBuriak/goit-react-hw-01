import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableContainer}>
      <thead>
        <tr>
          <th className={css.tableItem}>Type</th>
          <th className={css.tableItem}>Amount</th>
          <th className={css.tableItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <Params key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

const Params = ({ type, amount, currency }) => {
  return (
    <tr className={css.tableList}>
      <td className={`${css.tableValue} ${css.tableType}`}>{type}</td>
      <td className={css.tableValue}>{amount}</td>
      <td className={css.tableValue}>{currency}</td>
    </tr>
  );
};

export default TransactionHistory;
