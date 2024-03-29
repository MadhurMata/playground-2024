import { useNavigate } from 'react-router-dom';
import { Hero } from "src/types/heroe";

import Button from 'src/components/button/Button';
import ImageContainer from 'src/components/imageContainer/ImageContainer';

const HeroCard = ({ hero }: { hero: Hero }): JSX.Element => {
  const { thumbnail, name, description, id } = hero;
  const navigate = useNavigate();

  return (
    <div className="card">
      <ImageContainer
        url={`${thumbnail.path}.${thumbnail.extension}`}
        altSource={name}
        stylesProp="card-img-container"
      />
      <div className="card-text-container">
        <div className="info-container">
          <span className="truncate title">{name}</span>
          <p className="truncate-multipleLine">
            {description !== '' ? description : '(No description available)'}
          </p>
        </div>
        <Button
          onAction={() => {
            navigate(`/${name}/${id}`);
          }}
          textContent="Read more"
          styles="icon-arrow"
        />
      </div>
    </div>
  );
};

export default HeroCard;
