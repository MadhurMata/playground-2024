import { useState } from 'react';

interface ImageContainerProps {
  url: string;
  stylesProp: string;
  altSource: string;
}

const ImageContainer = ({ url, stylesProp, altSource }: ImageContainerProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={stylesProp}>
      <img
        src={url}
        alt={altSource}
        style={loaded ? {} : { display: 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageContainer;
