import { useEffect, useState } from "react";
import { getUsers } from "../Services/UserServices";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function fetchUsers() {
            try {
                const response = await getUsers();
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchUsers();

    }, []);

    return (
        <div>
            <h2>Users List</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;