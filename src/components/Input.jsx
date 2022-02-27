import { bool, renderable, string, number, oneOfType } from 'prop-types';

const Input = ({
  children,
  name,
  label,
  inputType,
  inputClassName,
  ...remainingProps
}) => {
  return (
    <>
      <label className="text-gray-600 font-medium block mt-4">{label}</label>
      <input
        className={`rounded-3xl border-solid border-gray-300 border py-2 px-4 w-full text-gray-700 ${inputClassName}`}
        name={name}
        type={inputType}
        {...remainingProps}
      />
    </>
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
};

Input.defaultProps = {
  children: null,
  name: '',
  label: null,
  inputType: '',
  disabled: false,
  inputClassName: '',
};

export default Input;
