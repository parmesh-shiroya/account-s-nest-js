import { Document } from 'mongoose'

export interface AdminRole extends Document {
    title: string,
    isActive: boolean
}

export interface AdminUser extends Document {
    adminRoleId: AdminRole,
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    password: string,
    gender: string,
    image: string,
    isActive: boolean,
    isKYC: boolean,
    isBlocked: boolean,
    deviceId: string,
    createdIp: string,
    createdBy: AdminUser,
    updatedIp: string,
    updatedBy: AdminUser,
}

export interface AdminUserInterface extends AdminUser {
    generateJWT: (extra?: object) => string
    comparePassword: (password: string) => Promise<boolean>
}
