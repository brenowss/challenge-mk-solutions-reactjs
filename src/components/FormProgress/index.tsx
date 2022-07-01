import React from 'react';
import { useSelector } from 'react-redux';
import { FormUserSignupProps } from '../../store/rootSlice';
import './styles.css';

function FormProgress() {
  const steps = ['Usuário', 'Validação', 'Empresa', 'Confirmação'];

  const formStep: number = useSelector<FormUserSignupProps>((state) => state.formStage);

  return (
    <div className="form-progress">
      <div style={{ width: `${(formStep / 4) * 100}%` }} className="progress-bar" />
      <div className="form-steps">
        {
          steps.map((step, i) => (
            <div className={`step ${formStep === (i + 1) ? 'active' : ''} ${formStep > (i + 1) ? 'done' : ''}`} key={step}>
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

  );
}

export default FormProgress;
