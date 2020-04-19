const useScroll = ({page,total,fetchData, size}) => {
    const onTableScroll = (scrollTop, e) => {
        const height = e.target.getBoundingClientRect().height;
        if ((page*size< total) && (scrollTop + height) > e.target.scrollHeight - 1) {
            fetchData({
                page: page + 1,
            });
        }
    };

    return {onTableScroll }
};

export default useScroll;