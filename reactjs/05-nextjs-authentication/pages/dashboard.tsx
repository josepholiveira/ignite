import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { setupApiClient } from "../services/api"
import { api } from "../services/apiClient"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <h1>Dashboard {user?.email}</h1>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  const response = await api.get('/me')
  
  return {
    props: {}
  }
})