import { Layout } from "antd";
import { Switch, Route, Link } from "react-router-dom";
import Movies from "./pages/Movies";
import Directors from "./pages/Directors";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header> </Header>
      <Content>
        <Switch>
          <Route path="/movies">
            <h1>Movies List</h1>
            <Movies />
          </Route>
          <Route path="/directors">
            <h1>Directors List</h1>
            <Directors />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
};

// function Home() {
//   return (
//     <div>
//       <h2> Welcome to the Movies database </h2>

//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/movies">Movies</Link>
//             <Route path="/movies">
//               <h1>Movies List</h1>
//               <Movies />
//             </Route>
//           </li>
//           <li>
//             <Link to="/directors">Directors</Link>
//             <Route path="/directors">
//               <h1>Directors List</h1>
//               <Directors />
//             </Route>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

export default App;
