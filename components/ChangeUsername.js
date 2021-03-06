import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError } = useMoralis();

  const setUsername = () => {
    const username = prompt("Enter your new username : ");

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-1 right-5">
      <button 
        disabled={isUserUpdating} 
        onClick={setUsername}
        className='hover:text-pink-700'
      >
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
