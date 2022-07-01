import { useSelector } from 'react-redux';
import { FormUserSignupProps } from '../../store/rootSlice';
import './styles.css';

type Props = {
  children: JSX.Element;
}

function FormWrapper({ children }: Props) {
  const steps = ['Usuário', 'Validação', 'Empresa', 'Confirmação'];

  const formStep = useSelector<FormUserSignupProps>((state) => state.formStage);

  return (
    <div className="form-wrapper">
      <div className="form-progress">
        <div style={{ width: `${(formStep as number / 4) * 100}%` }} className="progress-bar" />
        <div className="form-steps">
          {
              steps.map((step, i) => (
                <div className={`step ${formStep === (i + 1) ? 'active' : ''} ${formStep as number > (i + 1) ? 'done' : ''}`} key={step}>
                  <span className="number">
                    {i + 1}
                  </span>
                  <span className="word">
                    {step}
                  </span>
                </div>
              ))
            }
        </div>
      </div>

      <div className="form-container">
        {children}
      </div>
    </div>
  );
}

export default FormWrapper;
