
// const { IUser } from "/src/modules/user/interface/user-request.interface.ts"
declare global {
    namespace Express {
        interface Request {
            // user? IUser;
        }
    }
}