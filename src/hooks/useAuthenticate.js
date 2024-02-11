const useAuthenticate = () => {
    const apiKey = sessionStorage.getItem('api-key');

    return apiKey ? true : false;
};

export default useAuthenticate;
