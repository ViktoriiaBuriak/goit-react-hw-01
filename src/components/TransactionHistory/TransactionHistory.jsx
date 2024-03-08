import TransactionHistoryParams from "../TransactionHistoryParams/TransactionHistoryParams.jsx";
import css from "./TransactionHistory.module.css";

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
          <TransactionHistoryParams key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
