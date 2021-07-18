import { useEffect } from 'react';
import './styles/List.css';
import { changeMenuButtonColor } from './utils';

const List = ({ elements, title }) => {
  useEffect(() => {
    changeMenuButtonColor('black');
  }, []);

  return (
    <div className="list-container">
      <div className="list-container--title">
        <h1>{title}</h1>
      </div>
      <div className="list">
        {elements.map(element => (
          <div className="list--element">
            <img src={element.image} alt={element.name} />
            <div className="list--element--caption">{element.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
