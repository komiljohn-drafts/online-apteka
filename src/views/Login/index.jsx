import Logo from "../../assets/images/logo.jpg"
import Button from "../../components/Button"
import Input from "../../components/Input"

const Login = () => (
  <div className="grid grid-cols-12 gap-5 h-[100vh]">
    <div className="col-span-6 bg-[#d01c2d] flex flex-col items-center justify-center">
      <div className="w-4/5">
        <img src={Logo} alt="logo" width={500} height={500} className="pointer-events-none mx-auto" />
        <p className="text-4xl text-white text-center font-semibold mt-10">
          Samarqand Davlat Tibbiyot Instituti Nexroxirurgiya Klinikasi va Kursi
        </p>
      </div>
    </div>
    <div className="col-span-6 flex justify-center items-center">
      <div className="w-3/5">
        <p className="text-5xl mb-10 font-semibold">Tizimga kirish</p>
        <div>
          <p className="text-base font-medium mb-1">Login</p>
          <Input placeholder="Loginni kiriting" />
        </div>
        <div className="mt-4 mb-4">
          <p className="text-base font-medium mb-1">Parol</p>
          <Input placeholder="Parolni kiriting" />
        </div>
        <Button widthFull className="h-10">
          Kirish
        </Button>
      </div>
    </div>
  </div>
)

export default Login
