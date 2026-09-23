import { useUser } from "../UserContext";

type ProfileProps = {
  onBack: () => void;
};

function Profile({ onBack }: ProfileProps) {
  const { username, role } = useUser();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow">

        <h1 className="text-3xl font-bold">
          Profile
        </h1>

        <p className="mt-4 text-lg">
          Name: {username}
        </p>

        <p className="text-lg">
          Role: {role}
        </p>

        <button
          onClick={onBack}
          className="mt-6 rounded bg-gray-800 px-4 py-2 text-white"
        >
          Back
        </button>

      </div>
    </div>
  );
}

export default Profile;