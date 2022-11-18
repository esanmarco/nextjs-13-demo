'use client';
import z from 'zod';
import { useMutation } from '@tanstack/react-query';
import { AddUser, API_BASE_URL } from '../../server/models/user';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const userSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string().email(),
    company: z.object({
        name: z.string(),
        catchPhrase: z.string(),
        bs: z.string(),
    }),
});

const useUserQuery = () => {
    const { refresh } = useRouter();

    return useMutation(['addUser'], async (user: AddUser) => {
        const res = await (
            await fetch(`${API_BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
        ).json();
        refresh();
        return userSchema.parse(res);
    });
};

const defaultState = {
    name: '',
    email: '',
    companyName: '',
    companyCatchPhrase: '',
};

export default function AddUserModal() {
    const { mutateAsync, isLoading, isSuccess } = useUserQuery();
    const [{ name, email, companyName, companyCatchPhrase }, setState] =
        useState(defaultState);

    const inputs = [
        { name: 'name', type: 'text', label: 'Full Name', value: name },
        { name: 'email', type: 'email', label: 'Email Address', value: email },
        {
            name: 'companyName',
            type: 'text',
            label: 'Company Name',
            value: companyName,
        },
        {
            name: 'companyCatchPhrase',
            type: 'text',
            label: 'Company Catch Phrase',
            value: companyCatchPhrase,
        },
    ];

    useEffect(() => {
        if (isSuccess) {
            setState(defaultState);
            document.getElementById('close-modal')?.click();
        }
    }, [isSuccess]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSave = async () => {
        try {
            await mutateAsync({
                name,
                email,
                company: {
                    name: companyName,
                    catchPhrase: companyCatchPhrase,
                    bs: '',
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <input type="checkbox" id="add-user-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="text-left modal-box">
                    <h3 className="mb-4 text-lg font-bold">Add New User</h3>

                    <div className="flex flex-col gap-3">
                        {inputs.map((i, idx) => (
                            <input
                                key={`add-user-${idx}`}
                                type={i.type}
                                placeholder={i.label}
                                name={i.name}
                                value={i.value}
                                onChange={handleChange}
                                className="w-full input input-bordered"
                            />
                        ))}
                    </div>

                    <div className="modal-action">
                        <label
                            id="close-modal"
                            htmlFor="add-user-modal"
                            className="btn btn-base-700"
                        >
                            Cancel
                        </label>
                        <button
                            onClick={handleSave}
                            disabled={isLoading}
                            className={`${
                                isLoading ? 'loading' : ''
                            } btn btn-secondary`}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
