import { useState } from 'react';
import { useInView } from "react-intersection-observer";


interface ImageContainerProps {
  url: string;
  stylesProp: string;
  altSource: string;
}

const ImageContainer = ({ url, stylesProp, altSource }: ImageContainerProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView();  

  return (
    <div className={stylesProp}>
      <img
        ref={ref}
        src={inView ? url : ""}
        alt={altSource}
        style={loaded ? {} : { display: 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageContainer;
