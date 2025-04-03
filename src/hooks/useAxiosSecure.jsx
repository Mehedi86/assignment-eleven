import axios from 'axios';
import React, { useEffect } from 'react';
import useAuthInfo from './useAuthInfo';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logoutUser } = useAuthInfo();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('error caught in interceptor', error)
            if (error.status === 401 || error.status === 403) {
                console.log('need to logout user')
                logoutUser()
                    .then(() => {
                        console.log('logged out user');
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log('error', error)
                    })
            }
            return Promise.reject(error)
        })
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;