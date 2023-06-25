import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDJczCOIcMFYkQwDv3GGgCAhy6lRUeUpdc",
  authDomain: "react-firebase-upload-a8f18.firebaseapp.com",
  projectId: "react-firebase-upload-a8f18",
  storageBucket: "react-firebase-upload-a8f18.appspot.com",
  messagingSenderId: "260494964859",
  appId: "1:260494964859:web:08f7193d82250c09da0ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file: Blob) {
 const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}