import Layout from "../components/layout";
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useUser } from '../utils/auth/useUser';

const HomePage = () => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/offers')
    }
  }, [user])

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center">
        <h1>Welcome to Flora's Kitchen</h1>
        <p>Redirecting...</p>
      </div>
    </Layout>
  );
}

export default HomePage;
