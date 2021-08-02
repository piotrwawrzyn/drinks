import { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles/List.css';
import { changeMenuButtonColor, switchBodyScrolling } from './utils';

const List = ({ elements, title }) => {
  useEffect(() => {
    changeMenuButtonColor('black');
    switchBodyScrolling(true);

    return () => {
      switchBodyScrolling(false);
    };
  }, []);

  const history = useHistory();

  return (
    <div className="list-container">
      <div className="list-container--title">
        <h1>{title}</h1>
      </div>
      <div className="list">
        {elements.map(element => (
          <div
            onClick={() => history.push('/' + element.id)}
            className="list--element"
          >
            <div class="list--element--image-wrapper">
              <img src={element.image} alt={element.name} />
            </div>

            <div className="list--element--caption">{element.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
