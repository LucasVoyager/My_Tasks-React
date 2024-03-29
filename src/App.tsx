import { Provider } from 'react-redux'
import AsideBar from './containers/AsideBar'
import TasksList from './containers/TasksList'
import GlobalStyleP, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyleP />
      <Container>
        <AsideBar />
        <TasksList />
      </Container>
    </Provider>
  )
}

export default App
