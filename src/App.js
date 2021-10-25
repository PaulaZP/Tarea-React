import './App.css';
import  React, {useEffect, useState} from 'react'
import NavBar from './components/Navbar'
import Layout from './components/Layout'
import Footer from './components/Footer'
import List from './components/List'

export default function App() {
  const [nameInput, SetNameInput] = useState('')
  const [idInput, SetIdInput] = useState(0)
  const [studentsList, setStudentsList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [alert, setIAlert] = useState(false)

  useEffect(() => {
    fetchStudents()
  }, [alert])

  const fetchStudents = () => {
    return fetch('https://students.hasura.app/api/rest/students', {
      method: 'GET',
      headers: {
        'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
      }
    }).then(response => response.json())
      .then(result => {
        setStudentsList(result.students)
        setIsLoaded(true)
    })
  }

const insertSudent = (id, name) => {
  return fetch('https://students.hasura.app/api/rest/students', {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
    },
    body:JSON.stringify({"id": id , "name": name})
  }).then(response => response.json())
    .catch(error => console.log(error))
}

  const handleSubmit = (e) => {
  e.preventDefault()
    insertSudent(idInput, nameInput).then(() => {setIAlert(true)})
    SetIdInput(0)
    SetNameInput("")
  }

    return (
      <Layout>
      <NavBar />
        <form onSubmit= {handleSubmit}>
          <input 
            value={idInput} 
            type="number" 
            name="id" 
            placeholder="id" 
            onChange= {e => SetIdInput (e.target.value)} />
          <input 
            value={nameInput} 
            type="text" 
            name="name" 
            placeholder="name" 
            onChange= {e => SetNameInput (e.target.value)} />
          <button type="submit" value="submit">Add student</button>
          {alert && <h2>Nuevo estudiante ingresado</h2>}
        </form>
        {!isLoaded ? <p>loading...</p> : <List students={studentsList} hoverable/>}
        <Footer />
      </Layout>
    );
}