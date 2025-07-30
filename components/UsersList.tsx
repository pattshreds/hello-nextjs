import { fetchUsers } from '@/app/utils/actions';

async function UsersList() {
    const users = await fetchUsers();
    return (
        <div className='mb-4'>
            {users.length ? (
                <div>
                    {users.map((user) => {
                        return (
                            <h4 key={user.id} className='capitalize tex-lg'>
                                {user.firstName} {user.lastName}
                            </h4>
                        );
                    })}
                </div>
            ) : (
                <p>No users found...</p>
            )}
        </div>
    );
}

export default UsersList;
