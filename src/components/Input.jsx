import { bool, renderable, string, number, oneOfType } from 'prop-types';

const Input = ({
  children,
  name,
  label,
  inputType,
  inputClassName,
  error,
  value,
  icon,
  ...remainingProps
}) => {
  return (
    <div className="relative">
      <label className="mt-4 block font-medium text-gray-600">{label}</label>
      <input
        className={`w-full rounded-3xl border border-solid ${
          error
            ? 'border-red-300'
            : value && !error
            ? 'border-green-300'
            : 'border-gray-300'
        } py-2 px-4 text-gray-700 ${inputClassName}`}
        name={name}
        type={inputType}
        value={value}
        {...remainingProps}
      />
      {icon}
    </div>
  );
};

Input.propTypes = {
  children: renderable,
  name: string,
  label: oneOfType([renderable, string]),
  inputType: string,
  tabIndex: number,
  disabled: bool,
  inputClassName: string,
  error: bool,
  value: string,
  icon: renderable,
};

Input.defaultProps = {
  children: null,
  name: '',
  label: null,
  inputType: '',
  disabled: false,
  inputClassName: '',
  error: false,
  value: '',
  icon: null,
};

export default Input;
