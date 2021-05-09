import { useContext } from "react"
import { Can } from "../components/Can"
import { AuthContext } from "../contexts/AuthContext"
import { setupApiClient } from "../services/api"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext)
  
  return (
    <>
      <h1>Dashboard {user?.email}</h1>

      <button onClick={signOut}>signOut</button>

      <Can permissions={['metrics.list']}> 
        Métricas
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get('/me')

  console.log(response)
  
  return {
    props: {}
  }
})