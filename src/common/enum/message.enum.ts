
export enum PublicMessage {
    SendOtpCode= "کد باموفقعیت ارسال شد",
    EntredSuccessfully= "باموفقیت وارد شدید",
    Created="با موفقیت ایجاد شد",
    Updated= "به روز رسانی انجام شد",
    Deleted = "باموفقعیت حذف شد",

}

export enum BadRequestMessage {
    InvalidMobileNumber= "شماره وارد شده اشتباه است",
    UnInvalidOtpCode= "کد قبلی هنوز معتبر است"
}

export enum NotFoundMessage {
    NotFoundUser= "کاربری یافت نشد"
}

export enum confilictMessage {
    ConfilictMobile= "این شماره قبلا ثبت شده"
}

export enum AuthMessage {
    InvalidOtpCode= "کد اشتباه است",
    ExpiredOtpCode= "تاریخ انقضا کد به پایان رسیده",
    UnEntredAcoount= "لطفا وارد حساب کاربری شوید"
}

