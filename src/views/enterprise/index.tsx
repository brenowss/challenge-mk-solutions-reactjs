import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import FormButton from '../../components/FormButton';
import FormWrapper from '../../components/FormWrapper';
import Wrapper from '../../components/Wrapper';
import routerIcon from '../../public/icons/router.svg';
import dotsIcon from '../../public/icons/dots.svg';
import './styles.css';

import { formEnterpriseSignup, formStage, FormUserSignupProps } from '../../store/rootSlice';
import BackButton from '../../components/BackButton';
import api from '../../services/api';

type FormValues = {
  segment: string;
  type: string;
  cnpj: string;
  socialName: string;
  phone: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
  block: string;
};

function Enterprise() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(formStage(3));
  }, []);

  const formSegment = useSelector<FormUserSignupProps>(
    (state) => state.formEnterpriseSignup.segment,
  );
  const formType = useSelector<FormUserSignupProps>((state) => state.formEnterpriseSignup.type);
  const formCnpj = useSelector<FormUserSignupProps>((state) => state.formEnterpriseSignup.cnpj);
  const formSocialName = useSelector<FormUserSignupProps>(
    (state) => state.formEnterpriseSignup.socialName,
  );
  const formPhone = useSelector<FormUserSignupProps>((state) => state.formEnterpriseSignup.phone);
  const formCep = useSelector<FormUserSignupProps>((state) => state.formEnterpriseSignup.cep);
  const formAddress = useSelector<FormUserSignupProps>(
    (state) => state.formEnterpriseSignup.address,
  );
  const formNumber = useSelector<FormUserSignupProps>((state) => state.formEnterpriseSignup.number);
  const formComplement = useSelector<FormUserSignupProps>(
    (state) => state.formEnterpriseSignup.complement,
  );
  const formBlock = useSelector<FormUserSignupProps>((state) => state.formEnterpriseSignup.block);

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      segment: formSegment as string,
      type: formType as string,
      cnpj: formCnpj as string,
      socialName: formSocialName as string,
      phone: formPhone as string,
      cep: formCep as string,
      address: formAddress as string,
      number: formNumber as string,
      complement: formComplement as string,
      block: formBlock as string,
    },
  });

  const onSubmit = handleSubmit((data) => {
    api.post('/enterpriseSignup', {
      data,
    });

    dispatch(formEnterpriseSignup(data));

    toast.success('Etapa concluída!');

    navigate('/success');
  });

  return (
    <Wrapper>
      <FormWrapper>
        <>
          <h2>Cadastre sua empresa</h2>
          <p>
            Agora cadastre as informações de sua empresa para criar sua conta empresarial
            {' '}
            <br />
            customizada para o seu negócio.
          </p>

          <form onSubmit={onSubmit}>
            <fieldset>
              <Row>
                <Col md="5">
                  <div className="form-group segment-options">
                    <label className="label" htmlFor="segmentInput">Escolha o segmento da sua empresa</label>

                    <div className="options">
                      <label htmlFor="segmentISPInput" className="option">
                        <input type="radio" {...register('segment')} id="segmentISPInput" required />
                        <img src={routerIcon} alt="Provedores de Internet" />
                        <span>Provedores de Internet</span>
                      </label>

                      <label htmlFor="segmentOthersInput" className="option">
                        <input type="radio" {...register('segment')} id="segmentOthersInput" required />
                        <img src={dotsIcon} alt="Outros segmentos" />
                        <span>
                          Outros
                          <br />
                          segmentos
                        </span>
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>

              <hr />

              <Row>
                <Col md="8">
                  <div className="form-group">
                    <label className="label" htmlFor="typeInput">Tipo de empresa</label>
                    <select {...register('type')} defaultValue="" id="typeInput" required>
                      <option value="" disabled>Selecione o tipo de empresa</option>
                      <option value="tipo_1">Tipo 1</option>
                      <option value="tipo_2">Tipo 2</option>
                      <option value="tipo_3">Tipo 3</option>
                      <option value="tipo_4">Tipo 4</option>
                    </select>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md="5">
                  <div className="form-group">
                    <label className="label" htmlFor="cnpjInput">CNPJ</label>
                    <input type="text" {...register('cnpj')} id="cnpjInput" required />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md="5">
                  <div className="form-group">
                    <label className="label" htmlFor="socialNameInput">Razão social</label>
                    <input type="text" {...register('socialName')} id="socialNameInput" required />
                  </div>
                </Col>
                <Col md="3">
                  <div className="form-group">
                    <label className="label" htmlFor="phoneInput">Telefone</label>
                    <input type="text" {...register('phone')} id="phoneInput" required />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md="5">
                  <div className="form-group">
                    <label className="label" htmlFor="cepInput">CEP</label>
                    <input type="text" {...register('cep')} id="cepInput" required />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md="8">
                  <div className="form-group">
                    <label className="label" htmlFor="addressInput">Endereço</label>
                    <input type="text" {...register('address')} id="addressInput" required />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md="3">
                  <div className="form-group">
                    <label className="label" htmlFor="numberInput">Número</label>
                    <input type="text" {...register('number')} id="numberInput" required />
                  </div>
                </Col>
                <Col md="3">
                  <div className="form-group">
                    <label className="label" htmlFor="complementInput">Complemento</label>
                    <input type="text" {...register('complement')} id="complementInput" required />
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label className="label" htmlFor="blockInput">Bairro</label>
                    <input type="text" {...register('block')} id="blockInput" required />
                  </div>
                </Col>
              </Row>
            </fieldset>

            <FormButton label="Confirmar" />
            <BackButton />
          </form>
        </>
      </FormWrapper>
    </Wrapper>
  );
}

export default Enterprise;
