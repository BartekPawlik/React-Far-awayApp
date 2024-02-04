export default function Item({ item, onDeleteItem, odToggleItemss }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => odToggleItemss(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
