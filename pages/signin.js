import Layout from '../components/layout';
import FirebaseAuth from '../components/auth'

const Auth = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Sign In</h2>
                <FirebaseAuth />
                <p className="mt-3 text-xs text-gray-500">Feel free to login, we won't spam you. 👍</p>
            </div>
        </Layout>
    )
}

export default Auth
