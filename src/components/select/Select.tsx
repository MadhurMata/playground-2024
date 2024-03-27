interface SelectProps {
  onUpdateSelect: (value: string) => void;
  selectOptions: string[];
  selectValue: string;
}

const Select = ({ onUpdateSelect, selectOptions, selectValue }: SelectProps): JSX.Element => {
  return (
    <label className="select-custom">
      <select
        name="select"
        className="select-custom__select"
        value={selectValue}
        onChange={(e) => onUpdateSelect(e.target.value)}
      >
        {selectOptions &&
          selectOptions.map((option, i) => (
            <option key={i} value={i}>
              {option}
            </option>
          ))}
      </select>
      <div className="select-custom__caret"></div>
    </label>
  );
};

export default Select;
