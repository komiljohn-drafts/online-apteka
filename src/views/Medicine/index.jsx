import { useState } from "react"
import Card from "../../components/Card"
import CustomTable from "../../components/CustomTable"
import Header from "../../components/Header"

const Medicines = () => {
  const [offset, setOffset] = useState(1)
  const [limit, setLimit] = useState(10)

  const headColumns = [
    {
      key: "order",
      title: "№",
    },
    {
      key: "full_name",
      title: "Ism sharifi",
    },
    {
      key: "phone_number",
      title: "Telefon raqami",
    },
    {
      key: "has_been_at",
      title: "Kelgan sanasi",
    },
    {
      key: "inspection_conclusions",
      title: "Tekshiruv xulosalari",
    },
    {
      key: "diagnosis",
      title: "Diagnoz",
    },
    {
      key: "performed_treatments",
      title: "Otkazilgan muolajalar",
    },
    {
      key: "operation",
      title: "Operatsiya",
    },
  ]

  const bodyColumns = [
    {
      id: 1,
      full_name: "Anvar Bektemirov",
      phone_number: "+998997772288",
      has_been_at: "23.06.2022",
      inspection_conclusions: "Sog'lom",
      diagnosis: "Shamollash",
      performed_treatments: "Paratsetamol",
      operation: "Analgin demederol",
    },
    {
      id: 2,
      full_name: "G'ulomjon Yoqubov",
      phone_number: "+998997772288",
      has_been_at: "23.06.2022",
      inspection_conclusions: "Sog'lom",
      diagnosis: "Shamollash",
      performed_treatments: "Paratsetamol",
      operation: "Analgin demederol",
    },
  ]

  return (
    <div>
      <Header title="Dorilar" backLink={-1} />
      <div className="mainWrapper">
        <Card title="Dorilar">
          <CustomTable
            headColumns={headColumns}
            bodyColumns={bodyColumns}
            limit={limit}
            offset={offset}
            setLimit={setLimit}
            setOffset={setOffset}
          />
        </Card>
      </div>
    </div>
  )
}

export default Medicines
