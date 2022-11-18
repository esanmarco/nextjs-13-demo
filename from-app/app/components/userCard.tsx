import Link from 'next/link';
import { User } from '../../server/models/user';

interface UserCardProps extends User {}

export default function UserCard({ name, company, id }: UserCardProps) {
    return (
        <div className="bg-gray-600 shadow-xl card">
            <div className="text-left card-body">
                <h2 className="card-title">{name}</h2>
                <p>{company.name}</p>
                <div className="justify-end card-actions">
                    <Link
                        href={`/users/${id}`}
                        className="w-full btn btn-sm btn-info"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    );
}
