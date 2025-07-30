import Link from 'next/link';

export default function Info() {
    return (
        <div>
            <h1 className='text-7xl'>Info Page</h1>
            <Link
                href='/app'
                className='text-xl text-blue-500 inline-block mt-8'
            >
                Home
            </Link>
        </div>
    );
}
