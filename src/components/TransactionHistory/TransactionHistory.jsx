const TransactionHistory = ({ items }) => {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th className="table-item">Type</th>
          <th className="table-item">Amount</th>
          <th className="table-item">Currency</th>
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
    <tr className="table-list">
      <td className="table-value table-type">{type}</td>
      <td className="table-value">{amount}</td>
      <td className="table-value">{currency}</td>
    </tr>
  );
};

export default TransactionHistory;
