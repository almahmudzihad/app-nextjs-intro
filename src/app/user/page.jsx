import Link from "next/link";

export const metadata = {
  title: 'user',
  description: 'all user list',
}

const UserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div className="container mx-auto ">
      
      <div className="">
        {users.map((user) => (
          <div  key={user.id} className="mt-5">
            
              
                <h2 className="text-2xl font-bold py-2 ">{user.name}</h2>
                <p className="py-2">{user.email}</p>
                <div className="">
                  <Link href={`/user/${user.id}`} className="btn">Show Details</Link>
                </div>
              
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
