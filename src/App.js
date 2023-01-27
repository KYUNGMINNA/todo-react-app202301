import logo from './logo.svg';
import './App.css';

//직접 컴포넌트화 해서 사용
import Greeting from './components/Greeting'; //.js 생략해도 됨
import FoodList from './components/FoodList';
import Hello from './components/Hello';
import ItemMain from './components/item/ItemMain';
import TodoTemplate from './components/todo/TodoTemplate';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Join from './components/user/Join';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/user/Login';

function App() {
  return (
    //HTML이 아니고 JS임 그래서 class 대신 className
    //label for 대신 htmlFor 이런식으로 사용

    //부모 없이 형제 태그 만들 수 없어 의미 없는 태그 <> </> 사용
    <>    
      {/* <Greeting />
      <FoodList /> */}

      <Header />
      {/* <TodoTemplate /> */}
      {/* <Join /> */}
      <Login />
      <Footer />

    </>
  );
}

export default App;
