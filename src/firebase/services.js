import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'

export const loginUser = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate('/catalog')
  } catch (error) {
    console.error(error)
  }
}

export const logoutUser = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}
