import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormButton from '../../components/FormButton';

import FormWrapper from '../../components/FormWrapper';
import Wrapper from '../../components/Wrapper';
import api from '../../services/api';
import {
  formSignup, formStage, FormUserSignupProps,
} from '../../store/rootSlice';

type FormValues = {
  email: string;
  name: string;
  phone: string;
  agreedTerms: boolean;
};

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(formStage(1));
  }, []);

  const formName = useSelector<FormUserSignupProps>((state) => state.formUserSignup.name);
  const formEmail = useSelector<FormUserSignupProps>((state) => state.formUserSignup.email);
  const formPhone = useSelector<FormUserSignupProps>((state) => state.formUserSignup.phone);
  const formAgreedTerms = useSelector<FormUserSignupProps>(
    (state) => state.formUserSignup.agreedTerms,
  );

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: formName as string,
      email: formEmail as string,
      phone: formPhone as string,
      agreedTerms: formAgreedTerms as boolean,
    },
  });

  const onSubmit = handleSubmit((data) => {
    api.post('/userSignup', {
      data,
    });

    dispatch(formSignup(data));

    toast.success('Etapa concluída!');

    navigate('/validation');
  });

  return (
    <Wrapper>
      <FormWrapper>
        <>
          <h2>Cadastre sua conta</h2>
          <p className="greenLabel">
            Vamos começar pela conta de usuário
          </p>

          <p>
            Preencha seu email que utiliza profissionalmente,
            <br />
            nome completo de pessoa física e seu número de celular.
          </p>
          <form onSubmit={onSubmit}>
            <fieldset>
              <Row>
                <Col md="5">
                  <div className="form-group">
                    <label className="label" htmlFor="emailInput">Email</label>
                    <input type="email" {...register('email')} id="emailInput" required />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="5">
                  <div className="form-group">
                    <label className="label" htmlFor="nameInput">Nome completo</label>
                    <input type="text" {...register('name')} id="nameInput" required />
                  </div>
                </Col>
                <Col md="3">
                  <div className="form-group">
                    <label className="label" htmlFor="phoneInput">Celular</label>
                    <input type="text" {...register('phone')} id="phoneInput" required />
                  </div>
                </Col>
              </Row>
              <label className="custom-checkbox">
                <input type="checkbox" {...register('agreedTerms')} required />
                <span className="checkmark" />
                Eu li e concordo com o
                {' '}
                <a href="https://www.google.com" target="_blank" rel="noreferrer">Contrato de uso</a>
              </label>
            </fieldset>

            <hr />

            <FormButton label="Cadastrar" />
          </form>
        </>
      </FormWrapper>
    </Wrapper>
  );
}

export default SignUp;
