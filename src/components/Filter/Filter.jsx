export const Filter = ({ onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="name" required onChange={onChange} />
    </label>
  );
};
