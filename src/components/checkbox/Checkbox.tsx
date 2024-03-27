interface CheckboxProps {
  checkbox: boolean;
  onToggleCheckboxState: () => void;
  label: string;
}
const Checkbox = ({
  checkbox = false,
  onToggleCheckboxState,
  label
}: CheckboxProps): JSX.Element => {
  return (
    <div className="form-checkbox">
      <input
        type="checkbox"
        id="checkbox"
        checked={checkbox}
        onChange={onToggleCheckboxState}
        onKeyDown={onToggleCheckboxState}
      />
      <label htmlFor="checkbox">
        <p>{label}</p>
      </label>
    </div>
  );
};

export default Checkbox;
