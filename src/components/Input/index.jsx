import "./style.scss"

const Input = ({ name, register = () => {}, errors, required, ...rest }) => {
  return (
    <div>
      <div className="input">
        <input
          name={name}
          {...register(name, { required })}
          {...rest}
          className="hover:border-primary active:border-primary focus-within:border-primary"
        />
      </div>
      <div>{errors && errors[name] ? errors[name].message : ""}</div>
    </div>
  )
}

export default Input
