import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../api/login"
import Swal from 'sweetalert2'



export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = users.find((user) => user.email === email);
        if (user && user.password === password) {
          navigate("/home");
          Swal.fire({
            icon: 'success',
            title: 'Giriş Başarılı',
            text: 'Hoş Geldiniz',
            timer: 1500
          })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Giriş Başarısız',
                text: 'Bilgilerinizi kontrol edip tekrar deneyiniz!',
                timer: 1500
              })
        }
      };


  return (
    <div className="bg-stone-100 w-full h-screen ">
      <form onSubmit={handleSubmit} className="flex justify-center">
        {" "}
        <div className="border w-96 h-96  ml-6 bg-white translate-y-32 shadow-lg rounded-lg ">
          <div className="flex flex-col mt-10 ">
            <p className="font-bold text-stone-600 text-3xl flex justify-center">
              Giriş Yap
            </p>
            <div class="relative mt-6 mx-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={email}
                onChange={handleEmailChange}
              />
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
            </div>
            <div class="relative mt-6 mx-8">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={password}
                onChange={handlePasswordChange}
              />
              <label
                for="password"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>
            <div class="my-10 mx-4">
              <button
                type="submit"
                class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:bg-stone-100 hover:text-black duration-300"
              >
                Giriş Yap
              </button>
            </div>
            <p class="text-center text-sm text-gray-500">
              Kullanıcı Bilgileriniz yok mu?{" "}
              <a
                href="#!"
                class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Hemen Edinin
              </a>
              .
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
