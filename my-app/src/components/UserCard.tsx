"use client"; // Добавляю директиву, чтобы компонент стал клиентским

import { useEffect, useState } from "react";
import { getUserData } from "@/lib/api";
import styles from "@/styles/UserCard.module.css"; // Импорт CSS модуля

interface User {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
}

export default function UserCard({ userId }: { userId: number }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUserData(userId).then(setUser).catch(console.error);
    }, [userId]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className={styles.userCard}>
        <div className={styles.userCardHeader}>
            <h2 className={styles.userName}>{user.name}</h2>
            <p className={styles.userEmail}>{user.email}</p>
        </div>
        <div className={styles.userCardContent}>
            <p className={styles.userCompany}>Company: {user.company.name}</p>
        </div>
        <div className={styles.userCardFooter}>
            <a href={`/user/${user.id}`} className={styles.viewDetailsLink}>
            View Details
            </a>
        </div>
        </div>
    );
}