export const fetchData = async (currentPage) => {
    const response = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
    const userData = await response.json();
    return userData;
};