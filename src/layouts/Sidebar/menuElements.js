import DashboardIcon from "@mui/icons-material/Dashboard"
import MedicalServicesIcon from "@mui/icons-material/MedicalServices"

const menuElements = [
  {
    id: "dashboard",
    title: "Bosh sahifa",
    path: "/dashboard",
    icon: DashboardIcon,
    permission: "DASHBOARD",
  },
  {
    id: "medicine",
    title: "Dorilar",
    path: "/medicine",
    icon: MedicalServicesIcon,
    permission: "MEDICINE",
  },
]

export default menuElements
