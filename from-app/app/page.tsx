import { User } from '../server/models/user';
import AddUserModal from './components/addUserModal';
import UserCard from './components/userCard';

export default async function Home() {
    const users = (await (
        await fetch('https://jsonplaceholder.typicode.com/users?limit=9')
    ).json()) as User[];

    return (
        <div className="w-full max-w-5xl p-8 mx-auto text-center">
            <div className="relative flex flex-row items-center justify-center mb-4">
                <h1 className="mb-4 text-3xl">Users</h1>
                <label
                    htmlFor="add-user-modal"
                    className="absolute right-0 btn bg-secondary text-base-100 hover:text-secondary"
                >
                    Add User{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </label>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {users.map(user => (
                    <UserCard key={user.id} {...user} />
                ))}
            </div>

            <AddUserModal />
        </div>
    );
}
