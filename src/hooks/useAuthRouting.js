import { useAuth } from "@/lib/api";
import React from "react";

export const useAuthRouting = () => {
    const isTokenExsist = Boolean(localStorage.getItem('token'));
    
    const { isError } = useAuth({ enabled: isTokenExsist });

    React.useEffect(() => {
        if(isError) {
            localStorage.removeItem('token')
        }
        if(!isTokenExsist || isError) {
            window.location.href = '/login';
        }
    }, [isTokenExsist, isError])
}