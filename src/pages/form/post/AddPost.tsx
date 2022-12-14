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
            }).then((data) => {
                console.log('success')
                navigate(`/w/get/${id}`);
            }).catch((err) => { })
        } else {
            dispatch(showModal('showLogin'));
        }
    };

    const onClickClearValue = () => {
        dispatch(clearValue());
    };

    const validationSchema = yup.object().shape({
        title: yup.string().required('vui l??ng nh???p ti??u ?????').min(5, 'ti??u ????? ??t nh???t 5 k?? t???'),
        province: yup.string().required('vui l??ng nh???p t???nh th??nh'),
        category: yup.string().required('vui l??ng nh???p th??? lo???i'),
        content: yup.string().required('vui l??ng nh???p n???i dung').min(30, 'n???i dung ??t nh???t 30 k?? t???'),
    });

    useEffect(() => {
        scrollToHere.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, []);

    return (
        <section className="py-12 bg-color_14">
            <div className="container__responsive">
                <div className="lg:w-3/5 mx-auto px-4">
                    <h2 className="lg:text-3xl text-lg font-bold " ref={scrollToHere}>T???o b??i vi???t</h2>
                    <p className="mt-4 text-md opacity-70">N???i dung b??i vi???t ph???i kh??ng g??y ???nh h?????ng ?????n c?? nh??n ho???c t???p th??? kh??c</p>

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
                                            placeholder="T???nh"
                                            component={SelectField}
                                            options={PROVINCE_OPTION}
                                        />
                                        <FastField
                                            name="category"
                                            className="min-w-[150px]"

                                            defaultNameTouchSelect="5"
                                            label=""
                                            placeholder="Th??? lo???i"
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
                                        placeholder="Ti??u ?????"
                                        component={InputFiled}
                                    />

                                    <div className='mt-4'>
                                        <FastField
                                            name="content"
                                            label=""
                                            type="text"
                                            className=""
                                            value={initialValuePost.content}
                                            placeholder="N???i dung"
                                            component={EditorFields}
                                        />
                                    </div>

                                    <div className="mt-8 flex justify-end items-center gap-4 mr-4">
                                        <div>
                                            <div className="inline-block overflow-hidden bg-white rounded-md">
                                                <button type="button" onClick={onClickClearValue} className="font-medium py-2 px-6">Hu???</button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bg-color_fb text-white rounded-md inline-block overflow-hidden">
                                                <button type="submit" className="font-medium py-2 px-4 ">????ng b??i</button>
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