import {getEvent} from "@/app/actions/getAllEvents";
import {Container} from "@/components/Container";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";

export default async function Info({params} :any){

    try {
        const event = await getEvent(params.id);
        return (
            <Container>
                <Link href="/" className="inline-block px-[10px] py-[10px] rounded-[20px]
                bg-[#b8b4a9] hover:cursor-pointer transition ease-in-out delay-500
                     hover:bg-[#697d60] mb-[30px]">
                    Back to main page
                </Link>
                <div className="flex max-w-[320px] mx-auto flex-col px-[15px] py-[25px] rounded-[20px]
                     text-[#4a4945] bg-[#b8b4a9] hover:cursor-pointer transition ease-in-out delay-500
                     hover:bg-[#697d60]">
                    <h2>{event.title}</h2>
                    <div>
                        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                        <p>Time: {new Date(event.date).toLocaleTimeString()}</p>
                    </div>
                    <p>Category: {event.category}</p>
                    <p>Description: {event.description}</p>
                </div>
            </Container>
        );
    } catch (error) {
        return <div>Error fetching films</div>;
    }
}