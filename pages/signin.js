import Layout from '../components/layout';
import FirebaseAuth from '../components/auth'

const Auth = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Sign In</h2>
                <FirebaseAuth />
                <p className="text-xs text-gray-500 mt-3">Feel free to login, we won't spam you. 👍</p>
            </div>
        </Layout>
    )
}

export default Auth
