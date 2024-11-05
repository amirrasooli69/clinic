import { SetMetadata } from "@nestjs/common"
import { RoleUser } from "../enum/role.enum"

export const ROLE_KEY = "ROLES"
export const CanAccess = (...roles: RoleUser[]) => SetMetadata(ROLE_KEY, roles)