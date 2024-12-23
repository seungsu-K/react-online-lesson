import './Main.css';

function Main() {
  const user = {
    name: 'Kim',
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="login">로그인</div>;
  } else {
    return <div>로그아웃</div>;
  }

  // return <>{user.isLogin ? <div>로그인</div> : <div>로그아웃</div>}</>;
}

export default Main;
