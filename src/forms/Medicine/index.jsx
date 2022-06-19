import Input from "../../components/Input"
import "./style.scss"

const MedicineForm = ({ errors, register }) => {
  return (
    <div className="medicine__form">
      <div>
        <div className="mb-4">
          <span className="input-label">Ismi</span>
          <Input register={register} name="first_name" />
        </div>
        <div className="mb-4">
          <span className="input-label">Otasining ismi</span>
          <Input register={register} name="middle_name" />
        </div>
        <div className="mb-4">
          <span className="input-label">Familiyasi</span>
          <Input register={register} name="last_name" />
        </div>
        <div className="mb-4">
          <span className="input-label">Telefon raqami</span>
          <Input register={register} name="first_name" />
        </div>
        <div>
          <span className="input-label">Kelgan sanasi</span>
          <Input register={register} name="first_name" />
        </div>
      </div>
      <div>
        <div className="mb-4">
          <span className="input-label">Tekshiruv xulosalari</span>
          <Input register={register} name="first_name" />
        </div>
        <div className="mb-4">
          <span className="input-label">Tashxis</span>
          <Input register={register} name="first_name" />
        </div>
        <div className="mb-4">
          <span className="input-label">O'tkazilgan muolajalar</span>
          <Input register={register} name="first_name" />
        </div>
        <div className="mb-4">
          <span className="input-label">Operatsiya</span>
          <Input register={register} name="first_name" />
        </div>
      </div>
    </div>
  )
}

export default MedicineForm
