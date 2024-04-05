import { useParams } from "react-router-dom";



function Profile() {
    const {name}= useParams();
   
  return (
    <div>
        <h1>welcome to profil {name}</h1>
    </div>
  );
};

export default Profile;