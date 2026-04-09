import Link from "next/link";

async function UserDetails({ params }) {
  const { userid } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`,
  );
  const user = await res.json();
  return (
    <div className="container mx-auto">
      {user && (
        <div className="bg-gray-300 border border-gray-400">
          <div className="card bg-primary text-primary-content">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p> city : {user.address.city}</p>
            <Link className="btn" href="/user">Go Back</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
