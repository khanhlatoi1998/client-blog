const Comment = () => {
    return (
        <div className="mt-8">
            <p className="font-bold">BÌNH LUẬN</p>
            <div >
                <textarea className="mt-4 border border-solid border-gray-300 outline-none px-4 py-4 w-full h-[200px] text-sm" name="" id=""></textarea>
                <button className="mt-4 bg-gray-800 text-color_01 px-3 py-2 text-sm font-bold">Đăng</button>
            </div>
        </div>
    );
}

export default Comment;