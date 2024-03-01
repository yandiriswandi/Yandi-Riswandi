import Detail from "./page/Detail/Detail";
import Home from "./page/Home/Home";

const Routing: any = [
  {
    path: "",
    redirect: "home",
  },
  {
    path: "home",
    component: Home,
  },
  {
    path: "detail",
    component: Detail,
  },
];

export default Routing;
