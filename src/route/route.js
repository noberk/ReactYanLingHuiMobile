import  Home  from "./Home/home";
import  Login  from "./Login/login";
import Register from "./Register/register";

export const URL = {
          home: { name: "home", component: Home, children: [] },
          login: { name: "login", component: Login },
          register: { name: "register", component: Register },
}