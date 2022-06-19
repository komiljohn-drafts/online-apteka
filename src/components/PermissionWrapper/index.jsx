import { permissions } from "../../utils/constants"

const PermissionWrapper = ({ children, permission = "" }) => {
  if (!permissions.includes(permission)) return null

  return children
}

export default PermissionWrapper
