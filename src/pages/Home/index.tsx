import { ReactComponent as MainImg } from 'assets/images/main-img.svg';
import ButtonIcon from 'components/ButtonIcon';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                    <div>
                        <h1>Conheça o melhor catálogo de produtos</h1>
                        <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
                    </div>
                    <div>
                        <Link to={"/Products"} >
                            <ButtonIcon text="Inicie agora a sua busca" />
                        </Link>
                    </div>
                </div>
                <div className="home-img-container">
                    <MainImg />
                </div>
            </div>
        </div>

    );
}
export default Home;