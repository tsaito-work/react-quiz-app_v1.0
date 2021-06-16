import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Top from "./views/pages/Top";
import Play from "./views/pages/Play";
import Result from "./views/pages/Result";

/** アプリケーションの遷移先を設定するコンポーネント */
export default function App() {

  /** 特定の画面に直接遷移した場合はTopページにリダイレクトする */
  const ProtectedRoute = ({ component: Component, ...url }) => {
    return (
      <Route
        {...url}
        render={props => (props.location.state !== undefined
          ? <Component {...props} />
          : <Redirect to="/" />
        )}
      />
    )
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top}></Route>
        <Route path="/play" component={Play}></Route>
        {/* result画面は前画面からのpropsが渡されていない場合(直遷移の場合)はTopページにリダイレクト */}
        <ProtectedRoute path="/result" component={Result}></ProtectedRoute>
      </Switch>
    </Router>
  );
}