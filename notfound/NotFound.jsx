import image from '/notFound.png';
import s from './NotFound.module.css';
import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <div className={s.div}>
      <h2 className={s.heading}>
        Ops... Unfortunatelly this page does not exist
      </h2>
      <Link
        className={s.link}
        to="/"
      >
        Back Home
      </Link>
      <img
        className={s.img}
        src={image}
        alt="notFound"
      />
    </div>
  );
};
