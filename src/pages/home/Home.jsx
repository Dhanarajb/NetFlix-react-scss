import { Featured } from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbarr from '../../components/navbar/Navbarr'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbarr />
      <Featured type="movie"/>
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home
