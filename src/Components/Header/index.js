import './styles.css';
import Money from '../../Assets/money(4).svg';

export default function Header() {
  return (
    <div className="container-header">

    <img src={Money} alt="grana carai" />

     <div className="header">
       <h1 className="super-title">
        Indique e ganhe!
       </h1>
       <p className="paragraph">
        A cada indicação de vendas você ganha <b>R$ 112,50</b>. 
       </p>
     </div>

    </div>
  );
}
