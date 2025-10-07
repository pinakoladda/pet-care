import React from "react";

export const useTokenCheck = () => {
    const isTokenExsist = Boolean(localStorage.getItem('token'));

    React.useEffect(() => {
        if(isTokenExsist) {
            window.location.href = '/'
        }
    }, [isTokenExsist])
}