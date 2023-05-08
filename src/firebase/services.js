import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db, storage } from './firebase'
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc
} from 'firebase/firestore'

// LOGIN
export const loginUser = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate('/catalog')
  } catch (error) {
    console.error(error)
  }
}
// LOGOUT
export const logoutUser = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}
// UPLOAD IMAGES
export const uploadImages = async (file) => {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}
// INSERT PRODUCT
export const insertProduct = async (product) => {
  try {
    const productRef = collection(db, 'products')
    await addDoc(productRef, product)
  } catch (error) {
    console.log(error)
  }
}
// FETCH PRODUCTS
export const fetchProducts = async () => {
  const products = []
  const querySnapshot = await getDocs(collection(db, 'products'))
  querySnapshot.forEach((doc) => {
    const product = { ...doc.data() }
    product.docId = doc.id
    products.push(product)
  })
  return products
}
// DELETE PRODUCT
export const deleteProduct = async (docId) => {
  await deleteDoc(doc(db, 'products', docId))
}
// EDIT PRODUCT
export const editProduct = async (docId, product) => {
  const res = await setDoc(doc(db, 'products', docId), product)
}
