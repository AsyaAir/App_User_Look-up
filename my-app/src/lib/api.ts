export async function getUserData(userId: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) throw new Error("Failed to fetch user data");
    return res.json();
}