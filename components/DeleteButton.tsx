'use client'
import { deleteEvent } from "@/app/actions/getAllEvents";

export default function DeleteButton({ id, className }: any) {
    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.target === e.currentTarget) {
          await deleteEvent(id);
        }
    };

    return (
        <button className={className} onClick={handleDelete}>
            Delete
        </button>
    );
}