import Image from 'next/image';
import Link from 'next/link';
import { User } from '../../../server/models/user';

export default async function UserDetails({
    params,
}: {
    params: { id: string };
}) {
    const userDetails = (await (
        await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    ).json()) as User;
    return (
        <div className="w-full max-w-xl mx-auto">
            <Link
                href="/"
                className="gap-2 my-3 lowercase btn btn-xl btn-ghost"
            >
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
                        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                </svg>
                back
            </Link>
            <div className="p-8 bg-gray-700 shadow-xl card">
                <div className="flex flex-row items-center gap-5 mb-5">
                    <div className="avatar">
                        <div className="rounded">
                            <Image
                                width={100}
                                height={100}
                                src="https://placeimg.com/100/100/people"
                                alt=""
                            />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold">{userDetails.name}</h1>
                </div>

                <div className="stats stats-vertical">
                    <div className="stat">
                        <div className="stat-figure text-base-900 hover:text-primary hover:cursor-pointer">
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
                                    d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                                />
                            </svg>
                        </div>
                        <div className="text-xl stat-value text-primary">
                            {userDetails.email}
                        </div>
                        <div className="stat-desc">Email Address</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-base-900 hover:text-secondary hover:cursor-pointer">
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
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                        </div>
                        <div className="text-xl stat-value text-secondary">
                            {userDetails.phone}
                        </div>
                        <div className="stat-desc">Phone Number</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-base-900 hover:text-info hover:cursor-pointer">
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
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </div>
                        <div className="text-xl stat-value text-info">
                            {userDetails.company.name}
                        </div>
                        <div className="stat-desc">
                            Company Motto: {userDetails.company.catchPhrase}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
