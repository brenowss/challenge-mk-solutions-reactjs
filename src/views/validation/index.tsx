import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import FormButton from '../../components/FormButton';
import FormWrapper from '../../components/FormWrapper';
import Wrapper from '../../components/Wrapper';
import './styles.css';

import { formStage, FormUserSignupProps } from '../../store/rootSlice';
import BackButton from '../../components/BackButton';

function Validation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(formStage(2));
  }, []);

  const formPhone = useSelector<FormUserSignupProps>((state) => state.formUserSignup.phone);

  const { handleSubmit } = useForm();

  const onSubmit = handleSubmit(() => {
    toast.success('Etapa concluída!');

    navigate('/enterprise');
  });

  return (
    <Wrapper>
      <FormWrapper>
        <>
          <h2>Validação da conta</h2>
          <p className="greenLabel">
            Validação enviada para seu celular
          </p>

          <p>
            Enviamos uma mensagem SMS com o código de confirmação
            <br />
            para o celular abaixo:
          </p>

          <div className="phoneValidation">
            {formPhone as string}
          </div>

          <form onSubmit={onSubmit}>
            <fieldset>
              <div className="verificationCode">
                <h5>Informe o código de verificação</h5>
                <input type="number" />
                <a href="https://www.google.com" target="_blank" rel="noreferrer">Não recebeu o código? Clique para reenviar </a>
              </div>
            </fieldset>

            <FormButton label="Confirmar" />
            <BackButton />
          </form>
        </>
      </FormWrapper>
    </Wrapper>
  );
}

export default Validation;
