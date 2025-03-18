import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserData } from "@/lib/api";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: { name: string };
    address: { street: string; city: string };
}

export default function UserPage() {
    const router = useRouter();
    const { id } = router.query;
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (id) {
        getUserData(Number(id)).then(setUser).catch(console.error);
        }
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{user.name}</h1>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <p><strong>Company:</strong> {user.company.name}</p>
        </div>
    );
}
// •	Получаем id из router.query (Next.js динамические маршруты).
// •	Загружаем данные о пользователе по id с помощью getUserData.
// •	Отображаем информацию (имя, username, email, адрес, телефон, сайт и компанию).
// •	Добавлены стили прямо в style={{}}, но можно вынести их в CSS.

// на http://localhost:3000/user/1, отобразится страница с данными пользователя с id=1.