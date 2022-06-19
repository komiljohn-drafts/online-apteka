import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonIcon from "@mui/icons-material/Person"
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
  {
    id: "profile",
    title: "Shaxsiy kabinet",
    path: "/profile",
    icon: PersonIcon,
    permission: "PROFILE",
  },
]

export default menuElements
