import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";

const SigninGoogle = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  return (
    <div className="py-3">
      <div className="divider">OR</div>
      <div className="flex btn w-full">
      <i class="fa-brands fa-google text-blue-500"></i>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default SigninGoogle;
