import Container from '../Container';
import logo from '../../public/images/logo.svg';
import './styles.css';

type Props = {
  children: JSX.Element;
}

function Wrapper({ children }: Props) {
  return (
    <main id="main">
      <img src={logo} alt="MK Solutions" className="logo" />
      <Container>
        {children}
      </Container>
    </main>
  );
}

export default Wrapper;
