import { Input, Label } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="name" required onChange={onChange} />
    </Label>
  );
};
