import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("این فیلد الزامی می باشد")
    .email("ایمیل ورودی نامعتبر می باشد"),
  password: Yup.string()
    .required("این فیلد الزامی می باشد")
    .min(4, "رمز عبور باید بیشتر از 4 کاراکتر باشد"),
});
