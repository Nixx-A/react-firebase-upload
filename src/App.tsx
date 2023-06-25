import { uploadFile } from "./firebase/config"
import { useState } from "react"


export default function App () {
  const [file, setFile] = useState<null | File>(null)
  const [avatar, setAvatar] = useState<null | string>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (file !== null) {
      try {
        const result = await uploadFile(file)
        console.log(result);
        setAvatar(result)
      } catch (e) {
        console.log(e);
      }
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return
    setFile(e.target.files[0])
  }

  return (
    <main className="container">
    <form className="form" onSubmit={handleSubmit}>
      <input type="file" onChange={handleOnChange} />
      <button>Upload</button>
    </form>
    <p>Avatar</p>
    <img className="avatar" src={avatar} alt="" />
    </main>
  )
}
