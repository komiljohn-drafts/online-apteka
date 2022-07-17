import Input from "../../components/Input"
import "./style.scss"

const MedicineForm = ({ errors, register }) => {
  return (
    <div className="medicine__form">
      <div>
        <div className="mb-4">
          <span className="input-label">Ism-sharifi</span>
          <Input register={register} name="full_name" />
        </div>
        <div className="mb-4">
          <span className="input-label">Telefon raqami</span>
          <Input register={register} name="phone_number" />
        </div>
        <div>
          <span className="input-label">Kelgan sanasi</span>
          <Input register={register} name="begin_date" />
        </div>
      </div>
      <div>
        <div className="mb-4">
          <span className="input-label">Tekshiruv xulosalari</span>
          <Input register={register} name="inspection_conclusions" />
        </div>
        <div className="mb-4">
          <span className="input-label">Tashxis</span>
          <Input register={register} name="diagnosis" />
        </div>
        <div className="mb-4">
          <span className="input-label">O'tkazilgan muolajalar</span>
          <Input register={register} name="performed_treatments" />
        </div>
        <div className="mb-4">
          <span className="input-label">Operatsiya</span>
          <Input register={register} name="operation" />
        </div>
      </div>
    </div>
  )
}

export default MedicineForm
