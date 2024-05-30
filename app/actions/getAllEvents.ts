import {Event, Events} from "@/types";
import axios from "axios";

export function getAllEvents ():Promise<Events> {
    const data = axios.get('http://localhost:5252/api/event').then((res) => {
        console.log(res);
        return res.data;
    })
    return data
}


export function getEvent (id:any):Promise<Event> {
    const data = axios.get(`http://localhost:5252/api/event/${id}`).then((res) => {
        return res.data;
    })
    return data
}

export function deleteEvent (id:any) {
    try {
        const response = axios.delete(`http://localhost:5252/api/event/${id}`);
        console.log( response);
    } catch (error) {
        console.error( error);
    }
}
