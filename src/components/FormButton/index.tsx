import './styles.css';

type ButtonProps = {
  label: string;
}

export default function FormButton({ label }: ButtonProps) {
  return (
    <button type="submit" className="custom-button">
      {label}
    </button>
  );
}
