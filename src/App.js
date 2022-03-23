import MainLayout from "./layouts/MainLayout";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
        <MainLayout/>
      </Provider>
  );
}

export default App;
