import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(-1)} className="backButton">
      Voltar
    </button>
  );
}
