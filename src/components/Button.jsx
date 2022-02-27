import { bool, renderable, string, func } from 'prop-types';

const Button = ({
  icon,
  children,
  appendChildren,
  onClick,
  disabled,
  className,
  ...remainingProps
}) => {
  return (
    <div
      disabled={disabled}
      className={`border border-black inline-block ${className}`}
      role="button"
      onClick={onClick}
      {...remainingProps}
    >
      {children && <span>{children}</span>}
      {icon && icon}
    </div>
  );
};

Button.propTypes = {
  children: renderable,
  appendChildren: renderable,
  icon: renderable,
  onClick: func,
  disabled: bool,
  className: string,
};

Button.defaultProps = {
  children: null,
  appendChildren: null,
  icon: null,
  onClick: (f) => f,
  disabled: false,
  className: '',
};

export default Button;
