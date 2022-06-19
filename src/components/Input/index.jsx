import "./style.scss"

const Input = ({ name, register, errors, required, ...rest }) => {
  return (
    <div>
      <div className="input">
        <input name={name} {...register(name, { required })} {...rest} />
      </div>
      <div>{errors && errors[name] ? errors[name].message : ""}</div>
    </div>
  )
}

export default Input
