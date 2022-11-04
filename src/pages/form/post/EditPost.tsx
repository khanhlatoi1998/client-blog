import { useState, useEffect } from 'react';

import uuid from 'react-uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, FastField, Form } from 'formik';
import * as yup from 'yup';


import postApi from '../../../api/postApi';
import InputFiled from '../custom-fields/inputFields';
import SelectField from '../custom-fields/SelectField';
import { CATEGORY_OPTION, PROVINCE_OPTION } from '../../../common/Option';
import { useDispatch, useSelector } from 'react-redux';
import EditorFields from '../custom-fields/edittorFields';
import { showModal } from '../../../config/store/sliderPopup';
import FadeLoader from 'react-spinners/FadeLoader';

interface Post {
    id: string;
    province: string;
    category: string;
    title: string;
    content: any;
    like: number;
    share: number;
}

const EditPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const [initialValues, setInitialValues] = useState<Post>({
        id: '',
        province: '',
        category: '',
        title: '',
        content: '',
        like: 0,
        share: 0
    });
    const auth = useSelector((state: any) => state.auth);
    const checkLogin = useSelector((state: any) => state.checkLogin);
    const { id } = useParams();

    const handleChange = (value: any) => {
        // setState(value);
    };

    const addPost = (values: any) => {
        let date = new Date();
        let updateDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

        if (checkLogin.auth === true) {
            postApi.updatePost({
                ...auth,
                post: { ...values, updateDate: updateDate }
            });
            navigate(`/w/get/${id}`);
        } else {
            dispatch(showModal('showLogin'));
        }
    };

    const validationSchema = yup.object().shape({
        title: yup.string(), //.required('vui lòng nhập tiêu đề').min(3, 'tiêu đề ít nhất 5 ký tự'),
        province: yup.string(), //.required('vui lòng nhập tỉnh thành'),
        category: yup.string(), //.required('vui lòng nhập thể loại'),
        content: yup.string() //.required('vui lòng nhập nội dung').min(3, 'nội dung ít nhất 30 ký tự'),
    });

    useEffect(() => {
        postApi.getId(id)
            .then((data: any) => {
                setLoading(false);
                setInitialValues(data);
            }).catch((err) => console.log(err))
    }, []);

    return (
        <section className="py-12 bg-color_14">
            {
                loading
                    ? <div className="h-[500px] flex items-center justify-center">
                        <FadeLoader color="#36d7b7" />
                    </div>
                    : <div className="container__responsive">
                        <div className="lg:w-2/5 mx-auto px-4">
                            <h2 className="lg:text-3xl text-lg font-bold">Sửa bài viết</h2>
                            <p className="mt-4 text-md opacity-70">Nội dung bài viết phải không gây ảnh hưởng đến cá nhân hoặc tập thể khác</p>

                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={addPost}
                            >
                                {formikProps => {
                                    const { values, errors, touched, isSubmitting } = formikProps;
                                    // console.log(values);

                                    return (
                                        <Form className="mt-10">
                                            <div className="flex gap-4">
                                                <FastField
                                                    name="province"
                                                    className="min-w-[150px]"

                                                    defaultNameTouchSelect="3"
                                                    label=""
                                                    placeholder="Tỉnh"
                                                    component={SelectField}
                                                    options={PROVINCE_OPTION}
                                                />
                                                <FastField
                                                    name="category"
                                                    className="min-w-[150px]"

                                                    defaultNameTouchSelect="5"
                                                    label=""
                                                    placeholder="Thể loại"
                                                    component={SelectField}
                                                    options={CATEGORY_OPTION}
                                                />
                                            </div>
                                            <FastField
                                                name="title"
                                                label=""
                                                type="text"
                                                className="bg-white w-full rounded-md px-4 py-2"

                                                placeholder="Tiêu đề"
                                                component={InputFiled}
                                            />

                                            <div className='mt-4'>
                                                <FastField
                                                    name="content"
                                                    label=""
                                                    type="text"
                                                    className=""

                                                    placeholder="Nội dung"
                                                    component={EditorFields}
                                                />
                                            </div>

                                            <div className="mt-8 flex justify-end items-center gap-4 mr-4">
                                                <div>
                                                    <div className="inline-block overflow-hidden bg-white rounded-md">
                                                        <button type="button" className="font-medium py-2 px-6">Huỷ</button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="bg-color_fb text-white rounded-md inline-block overflow-hidden">
                                                        <button type="submit" className="font-medium py-2 px-4 ">Đăng bài</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="post__description" dangerouslySetInnerHTML={{ __html: state?.value }} /> */}
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
            }
        </section>
    );
};

export default EditPost;