export const Validate = (value , page) => {

    const errors = {}

    if (page === 'register'){

        if (!value.userName){
            errors.userName = 'نام کاربری را وارد کنید';
        }else if (value.userName.length > 0 && value.userName.length < 4 ){
            errors.userName = 'حداقل 4 کاراکتر وارد کنید';
        }else delete errors.userName;

        if (!value.confirmPassword){
            errors.confirmPassword = 'رمز عبور را تکرار کنید';
        }else if (value.confirmPassword !== value.password){
            errors.confirmPassword = 'اشتباه وارد شده';
        }else delete errors.confirmPassword;

    }

    if (!value.email){
        errors.email = 'ایمیل را وارد کنید'
    }else if (!value.email.includes('@gmail.com')){
        errors.email = 'ایمیل اشتباه است'
    }else delete errors.email;

    if (!value.password){
        errors.password = 'رمز عبور را وارد کنید';
    }else if (value.password.length < 9){
        errors.password = 'حداقل 9 کاراکتر وارد کنید';
    }else delete errors.password;

    return errors;
}
