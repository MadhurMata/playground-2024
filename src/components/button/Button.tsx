interface ButonProps {
  onAction: () => void;
  styles: string;
  textContent: string;
}
const Button = ({ onAction, styles, textContent }: ButonProps): JSX.Element => {
  return (
    <div className="button" role="button" tabIndex={0} onClick={onAction} onKeyDown={onAction}>
      <p>{textContent}</p>
      <span className={'icon ' + styles}></span>
    </div>
  );
};

export default Button;
