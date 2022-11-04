import { useEffect, useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import storage from '../../../../config/firebase/firebase';
import EditorToolbar, { modules, formats } from "../../post/EditorToolbar";
import { ref, getDownloadURL, uploadBytesResumable, uploadString } from "firebase/storage";

import { changeValuePost } from '../../../../config/store/sliderPost';
import { string } from 'yup';

interface Props {
    form: any;
    label: any;
    type: any;
    options: any;
    placeholder: any;
    disable: any;
    className: string;
    defaultNameTouchSelect: string;
}

const EditorFields: React.FC<any> = (props) => {
    const dispatch = useDispatch();
    const [content, setContent] = useState<string>('');
    const valuePost = useSelector((state: any) => state.post);
    const auth = useSelector((state: any) => state.auth);
    const {
        field, form,
        type, label, placeholder, disabled, clasName
    } = props;

    const { name, value, onBlur, onChange } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleChange = (value: string) => {
        // setContent(value);
        // form.setFieldValue(name, value);
        setBanner(value);
    };

    // set image banner and upload img firebase
    const setBanner = async (value: string) => {
        let HTML = value;
        const doc = new DOMParser().parseFromString(HTML, "text/html");
        const htmlSections: any = doc.querySelectorAll('body')[0];
        let listImg = htmlSections.querySelectorAll('p > img');
        let firstImg = htmlSections.querySelectorAll('p > img')[0]?.src;

        dispatch(changeValuePost({
            ...valuePost,
            content: value,
        }));

        if (listImg.length > 0) {
            const handlePost = async () => {
                const newPost: any = Array.from(htmlSections.childNodes).map(async (el: any, index) => {
                    let imgEl: any = el.getElementsByTagName('img');
                    if (imgEl.length > 0) {
                        const name = uuid();
                        const storageRef = ref(storage, `Image/${name}`) // path save in firebase
                        let isSrcFireBase = imgEl[0].src.search("firebase"); // check src of firebase or string base64

                        if (isSrcFireBase < 0) {
                            let stringEl = await uploadString(storageRef, imgEl[0].src, 'data_url').then(async (snapshot: any) => {
                                await getDownloadURL(snapshot.ref).then((url) => {
                                    imgEl[0].src = url;
                                });
                                return el.outerHTML;
                            });
                            return stringEl;
                        } else {
                            return el.outerHTML;
                        }
                    } else {
                        let stringEl = el.outerHTML;
                        return stringEl;
                    }
                });

                return Promise.all(newPost);
            }

            handlePost()
                .then((result) => {
                    let newContent = "";
                    result.map((el: string) => {
                        newContent += el;
                    })
                    const doc_2 = new DOMParser().parseFromString(newContent, "text/html");
                    const htmlSections_2: any = doc.querySelectorAll('body')[0];
                    let newFirstImg = htmlSections.querySelectorAll('p > img')[0]?.src;

                    console.log(newFirstImg);
                    dispatch(changeValuePost({
                        ...valuePost,
                        content: newContent,
                        banner: (firstImg === null || firstImg === undefined) ? valuePost.banner : newFirstImg
                    }));
                    form.setFieldValue(name, newContent);

                }, (err) => { console.log(err) })
        } else {
            form.setFieldValue(name, value);
        }
    };

    return (
        <div>
            <EditorToolbar />
            <ReactQuill
                placeholder={placeholder}
                theme="snow"
                modules={modules}
                formats={formats}

                value={valuePost.content}
                onChange={(v) => handleChange(v)}
            />
            <input
                id={name}
                {...field}
                className="hidden"

                type={type}
                disabled={disabled}
            />

            {showError ? <p className='text-sm text-[#ff7600]'>{errors[name]}</p> : <p className='text-sm opacity-0'>success</p>}
        </div>
    );

};

export default EditorFields;