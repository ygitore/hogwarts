import utilities from '../../helpers/data/utilities';
import './navbar.scss';

const loadNavbar = () => {
  const domString = ` 
    <nav>
        <a href="#" class="brand">Hogwarts</a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
    </nav>
    hi `;
  utilities.printToDom('nav-container', domString);
};
export default { loadNavbar };
