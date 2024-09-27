const baseUrl = "/api/blogs";

const getAll = async () => {
    const response = await fetch(baseUrl);
    return response.json();
};

export default { getAll };
