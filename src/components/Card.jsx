import { renderable, string } from 'prop-types';

const Card = ({ children, className }) => {
  return (
    <div
      className={`block rounded-xl border border-gray-200 bg-white p-6 ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: renderable,
  className: string,
};

Card.defaultProps = {
  children: null,
  className: '',
};

export default Card;
