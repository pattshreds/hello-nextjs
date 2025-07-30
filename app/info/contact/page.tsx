import Link from 'next/link';

export default function Contact() {
    return (
        <div>
            <h1 className='text-7xl'>Contact Page</h1>
            <Link href='/' className='text-xl text-blue-500 block mt-8'>
                Home
            </Link>
        </div>
    );
}
