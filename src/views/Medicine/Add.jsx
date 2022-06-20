import Button from "../../components/Button"
import Header from "../../components/Header"
import { CancelIcon, SaveIcon } from "../../assets/icons/svgs"
import Card from "../../components/Card"
import MedicineForm from "../../forms/Medicine"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

const MedicineAdd = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  useEffect(() => axios.get("http://localhost:3001/").then((res) => console.log("response - ", res)), [])

  const onSubmit = (data) => console.log("medicine form data - ", data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header
          title="Dori qo'shish"
          backLink={-1}
          rightElement={
            <div className="flex gap-3">
              <Button leftIcon={<CancelIcon />} shape="secondary" onClick={() => navigate(-1)}>
                Bekor qilish
              </Button>
              <Button leftIcon={<SaveIcon />} type="submit">
                Saqlash
              </Button>
            </div>
          }
        />
        <div className="p-4">
          <Card title="Dori qo'shish" width="70%">
            <MedicineForm errors={errors} register={register} control={control} />
          </Card>
        </div>
      </form>
    </div>
  )
}

export default MedicineAdd
