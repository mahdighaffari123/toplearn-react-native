import * as Yup from "yup";

export const userRegisterSchema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل ورودی نامعتبر می باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(4, "رمز عبور باید بیشتر از 4 کاراکتر باشد"),
    passwordConfirmation: Yup.string()
        .required("تکرار کلمه عبور الزامی است")
        .oneOf([Yup.ref("password"), null], "کلمه های عبور یکسان نمی باشند"),
});