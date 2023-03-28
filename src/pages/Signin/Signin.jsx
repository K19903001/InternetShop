import style from "./style.module.css";
import { useMutation } from "@tanstack/react-query";
import { signInFetch } from "../../api/api";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/user";

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    password: "",
    email: "",
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (values) => {
      return signInFetch(values);
    },
  });

  const onSubmit = async (values) => {
    const res = await mutateAsync(values);

    dispatch(
      setUser({
        ...res.data,
        token: res.token,
      })
    );
    return navigate("/products");
  };

  return (
    <div>
      <h1 className={style.pageTitle}>Вход в личный кабинет</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={onSubmit}
      >
        <Form className={style.signin_form}>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <ErrorMessage name="email" />
          <label htmlFor="password">Пароль</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
          />
          <ErrorMessage name="password" />
          <button type="submit" className="btn btn-primary">
            Войти
          </button>
          <p>
            У вас еще нет аккаута?{" "}
            <Link to={"/registration"}>Зарегистрироваться</Link>{" "}
          </p>
        </Form>
      </Formik>
    </div>
  );
}
