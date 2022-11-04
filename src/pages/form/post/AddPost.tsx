import { useState, useEffect, useRef } from 'react';

import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import { Formik, FastField, Form } from 'formik';
import * as yup from 'yup';
import storage from '../../../config/firebase/firebase';
import { ref, getDownloadURL, uploadBytesResumable, uploadString } from "firebase/storage";

import postApi from '../../../api/postApi';
import InputFiled from '../custom-fields/inputFields';
import SelectField from '../custom-fields/SelectField';
import { CATEGORY_OPTION, PROVINCE_OPTION } from '../../../common/Option';
import { useDispatch, useSelector } from 'react-redux';
import EditorFields from '../custom-fields/edittorFields';
import { showModal } from '../../../config/store/sliderPopup';
import { changeValuePost, clearValue } from '../../../config/store/sliderPost';
import { ValuePost } from '../../../common/Type';

const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const scrollToHere = useRef<any>(null);
    const [post, setPost] = useState<any>([]);
    const initialValuePost = useSelector((state: any) => state.post);
    const auth = useSelector((state: any) => state.auth);
    const checkLogin = useSelector((state: any) => state.checkLogin);

    const addPost = async (values: ValuePost) => {
        let id = uuid();
        let date = new Date();
        let createDate = (date.getMonth() + 1) + "/" + date.getFullYear();
        let updateDate = (date.getMonth() + 1) + "/" + date.getFullYear();
        values['nickname'] = auth.nickname;
        values['banner'] = initialValuePost.banner;

        if (checkLogin.auth === true) {
            postApi.createPost({
                ...auth,
                post: { 
                    ...values, 
                    id: id,
                    createDate: createDate, 
                    updateDate: updateDate 
                }
            });
            navigate(`/w/get/${id}`);
        } else {
            dispatch(showModal('showLogin'));
        }
    };

    const onClickClearValue = () => {
        dispatch(clearValue());
    };

    const validationSchema = yup.object().shape({
        title: yup.string().required('vui lòng nhập tiêu đề').min(5, 'tiêu đề ít nhất 5 ký tự'),
        province: yup.string().required('vui lòng nhập tỉnh thành'),
        category: yup.string().required('vui lòng nhập thể loại'),
        content: yup.string().required('vui lòng nhập nội dung').min(30, 'nội dung ít nhất 30 ký tự'),
    });

    useEffect(() => {
        scrollToHere.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, []);

    return (
        <section className="py-12 bg-color_14">
            <div className="container__responsive">
                <div className="lg:w-3/5 mx-auto px-4">
                    <h2 className="lg:text-3xl text-lg font-bold " ref={scrollToHere}>Tạo bài viết</h2>
                    <p className="mt-4 text-md opacity-70">Nội dung bài viết phải không gây ảnh hưởng đến cá nhân hoặc tập thể khác</p>

                    <Formik
                        initialValues={initialValuePost}
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

                                        value={initialValuePost.title}
                                        placeholder="Tiêu đề"
                                        component={InputFiled}
                                    />

                                    <div className='mt-4'>
                                        <FastField
                                            name="content"
                                            label=""
                                            type="text"
                                            className=""
                                            value={initialValuePost.content}
                                            placeholder="Nội dung"
                                            component={EditorFields}
                                        />
                                    </div>

                                    <div className="mt-8 flex justify-end items-center gap-4 mr-4">
                                        <div>
                                            <div className="inline-block overflow-hidden bg-white rounded-md">
                                                <button type="button" onClick={onClickClearValue} className="font-medium py-2 px-6">Huỷ</button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bg-color_fb text-white rounded-md inline-block overflow-hidden">
                                                <button type="submit" className="font-medium py-2 px-4 ">Đăng bài</button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default AddPost;