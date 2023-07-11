"use server"
import { cookies } from "next/headers";


    export const setCookie = async(cart_id: string)=>{

        'use server'
        cookies().set(
        { 
            name:'cart_id',
            value: cart_id,
            maxAge: 60 * 60 * 24 * 30,
            path: "/" 
        });
    
    }

    export const getCookies= ()=>{
        //Not async but requires await?!?! idk
        //Don't mark it as async however...
        return cookies().getAll();
    }

    export const getCartCookie= () => {
        return cookies().get('cart_id')?.value;
    }

    export const deleteCookie= async (cookie_name: string) => {
        'use server'
        cookies().set({
            name: cookie_name,
            value: "",
            maxAge: 0,
            path: "/"
        })
    }

    export const createCookie = async(cookie_name:string,cookie_value: string,maxAge=60 * 60 * 24 * 30)=>{

        cookies().set(
        { 
            name: cookie_name,
            value: cookie_value,
            maxAge: maxAge,
            path: "/" 
        });
    
    }

    export const getCookie = (cookie_name:string) => {
        return cookies().get(cookie_name)?.value;
    }