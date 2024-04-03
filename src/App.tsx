import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyleP, { Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Register from './pages/Register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Register />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyleP />
      <Container>
        <RouterProvider router={routes}></RouterProvider>
      </Container>
    </Provider>
  )
}

export default App
