import styles from "../assets/styles/Input.module.css"

type Inputs ={
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: () => void;
}

const Input= ({name, type, value, placeholder, onChange}: Inputs) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {name}
      <input
        aria-label={name}
        className={styles.input}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`e.g. ${placeholder}`}
        required
      />
      </label>
    </>
  );
};

export default Input;