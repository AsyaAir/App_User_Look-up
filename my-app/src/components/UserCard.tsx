"use client"; // Добавляю директиву, чтобы компонент стал клиентским

import { useEffect, useState } from "react";
import { getUserData } from "@/lib/api";

interface User {
    id: number;
    name: string;
    email: string;
}

export default function UserCard({ userId }: { userId: number }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUserData(userId).then(setUser).catch(console.error);
    }, [userId]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="p-4 border rounded-xl shadow-md">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        </div>
    );
}