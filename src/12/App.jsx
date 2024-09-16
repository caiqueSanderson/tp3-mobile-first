import './styles.css'

import Menu from './Components/Menu/Menu';
import Main from './Components/Main/Main';
import Comments from './Components/Comments/Comments';

export default function App() {
  return (
    <>
      <Menu />
      <Main />
      <h3>Comentários</h3>
      <Comments />
      <Comments />
      <Comments />
      <Comments />
    </>
  )
}

