import Button from "../../components/Button"
import Header from "../../components/Header"
import { CancelIcon, SaveIcon } from "../../assets/icons/svgs"
import Card from "../../components/Card"
import MedicineForm from "../../forms/Medicine"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import useMedicine from "../../api/useMedicine"
import { useEffect } from "react"

const MedicineAdd = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm()

  const { createMutation, medicine, updateMutation } = useMedicine({
    createMedicineProps: {
      onSuccess: () => navigate(-1),
    },
    id,
  })

  useEffect(() => {
    if (medicine.data) {
      const data = medicine.data?.attributes
      setValue("full_name", data?.full_name)
      setValue("phone_number", data?.phone_number)
      setValue("begin_date", data?.begin_date)
      setValue("inspection_conclusions", data?.inspection_conclusions)
      setValue("performed_treatments", data?.performed_treatments)
      setValue("operation", data?.operation)
    }
  }, [medicine.data])

  const onSubmitAdd = (data) => createMutation.mutate({ data })
  const onSubmitEdit = (data) => updateMutation.mutate({ data: { ...data, id } })

  console.log("medicine - ", medicine)

  return (
    <div>
      <form onSubmit={handleSubmit(id ? onSubmitEdit : onSubmitAdd)}>
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
