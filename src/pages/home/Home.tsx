import postApi from "../../api/postApi";

import { useEffect, useState } from "react";
import ListAccommodation from "../homestay/ListHomestay";
import ListBlogShare from "../blog-share/ListBlogShare";
import ListEat from "../Eat/ListEat";
import ListEntertainment from "../entertainment/ListEntertainment";
import ListFavoriteLocation from "../favorite-location/ListFavoriteLocation";
import ListHandBook from "../handbook/ListHandBook";
import Info from "../info/Info";
import TopView from "../topview/TopView";
import { RegisterType, ValuePost } from "../../common/Type";
import { CATEGORY_CHECK } from "../../common/Option";
import { useDispatch, useSelector } from "react-redux";
import { getListHandBook, getAllDataListPost, getListConsious, getListEntertainment, getListTopView, getListEat, getListHomestay, getListBlogShare } from "../../config/store/sliderDataListPost";


const Home = () => {
    const dispatch = useDispatch();
    const stateListHandBook = useSelector((state: any) => state.listHandBook);
    const stateListConsious = useSelector((state: any) => state.listConsious);
    const stateListEntertainment = useSelector((state: any) => state.listEntertainment);
    const stateListTopView = useSelector((state: any) => state.listTopView);
    const stateListEat = useSelector((state: any) => state.listEat);
    const stateListHomestay = useSelector((state: any) => state.listHomestay);
    const stateListBlogShare = useSelector((state: any) => state.listBlogShare);
    const dataListPost = useSelector((state: any) => state.dataListPost);

    const handleListConsious = (listPost: Array<ValuePost>) => {
        const listConsious: Array<ValuePost> = [];
        const maxItemConsious = 6;

        const groupByConsious = Object.values(listPost.reduce((group: any, post: ValuePost) => {
            const { province } = post;
            group[province] = group[province] ?? [];
            group[province].push(post);
            return group;
        }, {}));

        groupByConsious.forEach((group: any) => {
            let maxLike = Math.min(...group.map((o: ValuePost) => o.like));
            let consioutHaveMaxLike = group.find((el: ValuePost) => el.like === maxLike);
            listConsious.push(consioutHaveMaxLike);
        })

        const sortListConsious = listConsious.sort((a: ValuePost, b: ValuePost) => {
            return b.like - a.like;
        }).slice(0, maxItemConsious);

        dispatch(getListConsious(sortListConsious));
    };

    const handleTopView = (listPost: Array<ValuePost>) => {
        const sortListPost = listPost.sort((a: ValuePost, b: ValuePost) => {
            return b.view - a.view;
        });
        dispatch(getListTopView(sortListPost));
    };
    const handleHandBook = (listPost: Array<ValuePost>) => {
        const listHandBook = listPost.filter(o => o.category === CATEGORY_CHECK.handbook);
        dispatch(getListHandBook(listHandBook));
    };
    const handleEntertainment = (listPost: Array<ValuePost>) => {
        const listEntertainment = listPost.filter(o => o.category === CATEGORY_CHECK.entertainment);
        dispatch(getListEntertainment(listEntertainment));
    };
    const handleEat = (listPost: Array<ValuePost>) => {
        const listEat = listPost.filter(o => o.category === CATEGORY_CHECK.eat);
        dispatch(getListEat(listEat))
    };
    const handleHomestay = (listPost: Array<ValuePost>) => {
        const listHomestay = listPost.filter(o => o.category === CATEGORY_CHECK.homestay);
        dispatch(getListHomestay(listHomestay));
    };
    const handleBlogShare = (listPost: Array<ValuePost>) => {
        const listBlogShare = listPost.reverse();
        dispatch(getListBlogShare(listBlogShare));
    };

    useEffect(() => {
        postApi.getAll()
            .then(async (data: any) => {
                const listPost: Array<ValuePost> = [];
                const listPostUser: Array<ValuePost> = [];

                await data.map((item: RegisterType, index: number) => {
                    if (item.permission === 'user') {
                        item.listPost.map((post: ValuePost) => {
                            listPost.push(post);
                        });
                    } 
                    if (item.permission === 'user') {
                        item.listPost.map((post: ValuePost) => {
                            listPostUser.push(post);
                        });
                    }
                });

                handleListConsious(listPost);
                handleTopView(listPost);
                handleHandBook(listPost);
                handleEntertainment(listPost);
                handleEat(listPost);
                handleHomestay(listPost);
                handleBlogShare(listPostUser);
                
                dispatch(getAllDataListPost(listPost));
            }).catch((err) => { })
        }, []);
        
    return (
        <section>
            <Info />
            <ListFavoriteLocation stateListConsious={stateListConsious} />
            <TopView stateListTopView={stateListTopView}/>
            <ListHandBook stateListHandBook={stateListHandBook}/>
            <ListEntertainment stateListEntertainment={stateListEntertainment}/>
            <ListEat stateListEat={stateListEat}/>
            <ListAccommodation stateListHomestay={stateListHomestay}/>
            <ListBlogShare stateListBlogShare={stateListBlogShare}/>
        </section>
    );
};

export default Home;