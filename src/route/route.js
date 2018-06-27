import Home from "./Home/home";
import Login from "./Login/login";
import Register from "./Register/register";

export const URL = {
          home: { name: "home", relativePath: '/', component: Home, children: [] },
          login: { name: "login", relativePath: '/login', component: Login },
          register: { name: "register", relativePath: '/register', component: Register },
}