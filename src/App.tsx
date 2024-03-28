import AsideBar from "./containers/AsideBar"
import TasksList from "./containers/TasksList"
import GlobalStyleP, { Container } from "./styles"

function App() {
  return (
    <>
      <GlobalStyleP />
      <Container>
        <AsideBar />
        <TasksList />
      </Container>
    </>
  )
}

export default App
