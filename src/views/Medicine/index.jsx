import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import CustomTable from '../../components/CustomTable'
import Header from '../../components/Header'
import { AddIcon } from '../../assets/icons/svgs'
import { useNavigate } from 'react-router-dom'
import useMedicine from '../../api/useMedicine'
import { format } from 'date-fns'
import uz from 'date-fns/esm/locale/uz/index.js'

const Medicines = () => {
  const [offset, setOffset] = useState(1)
  const [limit, setLimit] = useState(10)

  const navigate = useNavigate()

  const headColumns = [
    {
      key: 'order',
      title: '№',
    },
    {
      key: 'full_name',
      title: 'Ism sharifi',
    },
    {
      key: 'phone_number',
      title: 'Telefon raqami',
    },
    {
      key: 'begin_date',
      title: 'Kelgan sanasi',
      render: (val) => <span>{format(new Date(val), 'dd-MMMM-yyyy', { locale: uz })}</span>,
    },
    {
      key: 'inspection_conclusions',
      title: 'Tekshiruv xulosalari',
    },
    {
      key: 'diagnosis',
      title: 'Diagnoz',
    },
    {
      key: 'performed_treatments',
      title: "O'tkazilgan muolajalar",
    },
    {
      key: 'operation',
      title: 'Operatsiya',
    },
    {
      key: 'operation',
      title: 'MRT natijalari',
    },
  ]

  const { medicines } = useMedicine({ medicinesParams: { offset, limit } })

  console.log('medicines - ', medicines)

  return (
    <div>
      <Header
        title='Dorilar'
        backLink={-1}
        rightElement={
          <Button leftIcon={<AddIcon />} onClick={() => navigate('add')}>
            Qo'shish
          </Button>
        }
      />
      <div className='mainWrapper'>
        <Card title='Dorilar'>
          <CustomTable
            count={medicines.data?.meta?.pagination?.total}
            headColumns={headColumns}
            bodyColumns={medicines.data?.data}
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
