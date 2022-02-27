import { renderable, string } from 'prop-types';

const Card = ({ children, className }) => {
  return (
    <div
      className={`block p-6 bg-white rounded-xl border border-gray-200 ${className}`}
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
