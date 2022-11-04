import { CSSProperties, useState } from "react";
import { AiOutlineClose, AiOutlineGoogle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik, FastField } from 'formik';
import * as yup from 'yup';

import { showModal } from "../../../../config/store/sliderPopup";
import InputFiled from "../../custom-fields/inputFields";
import authApi from "../../../../api/authApi";
import { checkLogin } from "../../../../config/store/sliderCheckLogin";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthType } from "../../../../common/Type";
import { updateAuth } from "../../../../config/store/sliderAuth";

interface Props {
    redirect: string | undefined;
}
interface Message {
    auth: boolean;
    message: string;
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
    textAlign: 'center'
};

const initialValues: AuthType = {
    username: '',
    password: '',
};

const Login: React.FC<Props> = (props) => {
    const {redirect} = props;
    const dispath = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [messageLogin, setMessageLogin] = useState<any>({
        auth: false,
        message: ''
    });

    const clickClosePopup = () => {
        dispath(showModal('closePopup'));
    };

    const clickShowPoppup = (e: string) => {
        dispath(showModal(e));
    };

    const validationSchema = yup.object().shape({
        username: yup.string().required('vui lòng nhập tài khoản').min(6, 'nhập ít nhất 6 ký tự'),
        password: yup.string().required('vui lòng nhập mật khẩu'),
    });

    const submitLogin = (values: AuthType) => {
        setLoading(true);

        authApi.login(values).then((res: any) => {
            setMessageLogin(res);
            setLoading(false);

            if (res.auth === true) {
                dispath(showModal('closePopup'));
                dispath(checkLogin({auth: true}));
                dispath(updateAuth(res));
            }

            if(redirect) {
                navigate('w/create');
            }
        }).catch((err) => { })
    }

    return (
        <div className="p-4 bg-login text-color_01 sm:w-500 w-[94%] mx-auto rounded-lg">
            <div className="text-right">
                <span className="cursor-pointer p-2">
                    <AiOutlineClose className="text-2xl mr-0 ml-auto inline" onClick={() => clickClosePopup()} />
                </span>
            </div>


            <div className="px-14">
                <p className="text-center lg:text-2xl text-lg">ĐĂNG NHẬP</p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitLogin}
                >
                    {formikProps => {
                        const { values, errors, touched, isSubmitting } = formikProps;
                        return (
                            <Form className="mt-10">
                                <FastField
                                    name="username"
                                    label="TÀI KHOẢN"
                                    type="text"
                                    placeholder=""
                                    className="w-full px-4 py-1 bg-transparent border-b border-solid border-color_06"
                                    component={InputFiled}
                                />
                                <FastField
                                    name="password"
                                    label="MẬT KHẨU"
                                    type="password"
                                    placeholder=""
                                    className="w-full px-4 py-1 bg-transparent border-b border-solid border-color_06"
                                    component={InputFiled}
                                />

                                <p className={`min-h-[20px] text-sm text-[#ff7600] ${messageLogin ? 'opacity-100' : 'opacity-100'}`}>{messageLogin?.message}</p>

                                <BeatLoader color="red" cssOverride={override} loading={loading} size={20} />

                                <div className="bg-color_01  mt-2">
                                    <button id="button" type="submit" className="w-full py-4 bg-color_01 text-color_02 hover:bg-color_04">LOGIN</button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>

                <div className="mt-4 text-center text-xs hover:underline">Forgot your password? Get help</div>

                <div onClick={() => clickShowPoppup('showRegister')} className="mt-8 py-4 text-center cursor-pointer border border-solid border-transparent hover:border-color_06">ĐĂNG KÝ</div>

                <div className="flex mt-2 justify-center items-center gap-4">

                    <a href="/" className="bg-[white] py-2 px-4 rounded">
                        <button>
                            <FaFacebookF className="text-[blue] " />
                        </button>
                    </a>
                    <a href="/" className="bg-[white] py-2 px-4 rounded">
                        <button>
                            <AiOutlineGoogle className="text-[red] " />
                        </button>
                    </a>
                    <a href="/" className="bg-[white] py-2 px-4 rounded">
                        <button>
                            <BsInstagram className="text-[red] " />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;