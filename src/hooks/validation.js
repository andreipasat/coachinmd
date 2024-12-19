const useValidation = () => {
    function isEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    return {
        isEmail
    }
}

export default useValidation