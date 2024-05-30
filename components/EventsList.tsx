import {deleteEvent, getAllEvents} from "@/app/actions/getAllEvents";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";

export default async function EventsList () {
    try {
        const allEvents = await getAllEvents();
        return (
            <ul className="list-none flex flex-wrap gap-[20px] justify-around py-[60px]">
                {allEvents.map((el) => {
                    return <Link key={el.id} href={`event/${el.id}`}><li  className="flex flex-col px-[15px] py-[25px] rounded-[20px]
                     text-[#4a4945] bg-[#b8b4a9] hover:cursor-pointer transition ease-in-out delay-500
                     hover:bg-[#697d60] relative">
                       <h2>{el.title}</h2>
                       <div>
                           <p>Date: {new Date(el.date).toLocaleDateString()}</p>
                           <p>Time: {new Date(el.date).toLocaleTimeString()}</p>
                       </div>
                        <p>Category: {el.category}</p>
                        <p>Description: {el.description}</p>
                        <DeleteButton id={el.id} className="absolute top-[-5px] right-[-5px]
                        text-[#4a4945] bg-[#697d60] hover:cursor-pointer transition ease-in-out delay-500
                     hover:bg-[#b8b4a9] px-[10px] py-[5px] rounded-[20px]"/>
                    </li></Link> ;
                })}
            </ul>
        );
    } catch (error) {
        return <div>Error fetching films</div>;
    }
}
