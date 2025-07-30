function page({ params }: { params: { id: String } }) {
    return (
        <div>
            <h1 className='text-4xl'> ID: {params.id} </h1>
        </div>
    );
}

export default page;
