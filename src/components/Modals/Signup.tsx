import { authModalState } from '@/atoms/authModalsAtom';
import { auth, firestore } from '@/firebase/firebase';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: 'login' }));
  };

  const [inputs, setInputs] = useState({ email: '', displayName: '', password: '' });
  const router = useRouter();

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName) return alert("Please fill all fields");
    try {
      toast.loading("Creating your account", { position: "top-center", toastId: "loadingToast" });

      const { email, password } = inputs;
      const newUser = await createUserWithEmailAndPassword(email, password);

      if (!newUser) return;

      const userData = {
        uid: newUser.user.uid,
        email: newUser.user.email,
        displayName: inputs.displayName,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        likedProblems: [],
        dislikedProblems: [],
        solvedProblems: [],
        starredProblems: [],
      };

      // Use setDoc instead of setDocs
      await setDoc(doc(firestore, "users", newUser.user.uid), userData);
      
      router.push('/');
    } catch (error: any) {
      toast.error(error.message, { position: "top-center" });
    } finally {
      toast.dismiss("loadingToast");
    }
  };

  useEffect(() => {
    if (error) toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
  }, [error]);

  return (
    <form onSubmit={handleRegister} className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium text-white">Register to LeetcodeClone</h3>
      <div>
        <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
          Email
        </label>
        <input
          onChange={handleChangeInput}
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@gmail.com"
        />
      </div>
      <div>
        <label htmlFor="displayName" className="text-sm font-medium block mb-2 text-gray-300">
          Display Name
        </label>
        <input
          onChange={handleChangeInput}
          type="text"
          name="displayName"
          id="displayName"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="Caption America"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-medium block mb-2 text-gray-300">
          Password
        </label>
        <input
          onChange={handleChangeInput}
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="*******"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
        disabled={loading} // Disable the button while loading
      >
        {loading ? "Registering..." : "Register"}
      </button>
      <div className="text-sm font-medium text-gray-300">
        Already have an account? &nbsp;
        <a href="#" className="text-blue-700 hover:underline" onClick={handleClick}>
          Log In
        </a>
      </div>
    </form>
  );
};

export default Signup;
