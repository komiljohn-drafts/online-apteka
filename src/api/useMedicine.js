import { useMutation, useQuery } from "react-query"
import { request } from "./httpClient"

const getMedicines = () => request.get("/medicines").then((res) => res.data)
const getMedicine = (id) => request.get(`/medicines/${id}`).then((res) => res.data.data)
const createMedicine = (data) => request.post("/medicines", data)
const updateMedicine = (data) => request.put(`/medicines/${data.data.id}`, data)

const useMedicine = ({ medicinesParams = {}, createMedicineProps, id }) => {
  const medicine = useQuery(["GET_MEDICINE", id], () => getMedicine(id), { enabled: !!id })
  const medicines = useQuery(["GET_MEDICINES"], () => getMedicines(medicinesParams), {
    enabled: !!medicinesParams.offset,
  })
  const createMutation = useMutation(createMedicine, createMedicineProps)
  const updateMutation = useMutation(updateMedicine, createMedicineProps)

  return { medicine, medicines, createMutation, updateMutation }
}

export default useMedicine
