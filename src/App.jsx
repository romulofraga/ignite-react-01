import './styles/global.scss'
import { RepositoryList } from './components/RepositoryList'
import { Contador } from './components/Contador'

export function App() { 
  return (
    <>
      <RepositoryList />
      <Contador />
    </>
  )
}