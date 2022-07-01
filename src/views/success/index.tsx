import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { formStage } from '../../store/rootSlice';

import FormWrapper from '../../components/FormWrapper';
import Wrapper from '../../components/Wrapper';
import successImage from '../../public/images/success.svg';
import alertIcon from '../../public/icons/alert.svg';

import './styles.css';

function Success() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(formStage(4));
  }, []);

  return (
    <Wrapper>
      <FormWrapper>
        <>
          <h2>Sucesso!</h2>
          <div className="success">
            <img src={successImage} alt="Sucesso!" className="done-image" />

            <p className="greenLabel">
              Sua conta foi cadastrada com sucesso!
            </p>

            <p>
              <strong>
                Aguarde que nossa equipe está validando os dados informados.
              </strong>
              <br />
              Enviamos a confirmação o mais breve possível em seu email.
            </p>

            <p className="email-alert">
              <img src={alertIcon} alt="Atenção!" />
              Foi enviado um email com os próximos passos
            </p>
          </div>
        </>
      </FormWrapper>
    </Wrapper>
  );
}

export default Success;
