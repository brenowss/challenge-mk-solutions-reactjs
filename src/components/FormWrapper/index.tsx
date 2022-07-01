import FormProgress from '../FormProgress';
import './styles.css';

type Props = {
  children: JSX.Element;
}

function FormWrapper({ children }: Props) {
  return (
    <div className="form-wrapper">

      <FormProgress />
      <div className="form-container">
        {children}
      </div>
    </div>
  );
}

export default FormWrapper;
