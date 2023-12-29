export const ListItem = ({ filter, elem, onClick }) => {
  const { id, name, number } = elem;
  const regExp = new RegExp(`${filter}`, 'i');
  return (
    regExp.test(name) && (
      <li>
        <p>
          {name}: {number}
        </p>
        <button onClick={onClick} data-id={id}>
          Delete
        </button>
      </li>
    )
  );
};
