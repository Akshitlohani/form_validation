import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [parentName, setParentName] = useState('')
  const [parentNumber, setParentNumber] = useState('')
  const [emergencyNumber, setEmergencyNumber] = useState('')
  const [rel2Student, setRel2Student] = useState('')

  const [isSubmit, setIsSubmit] = useState(false)

  const isValid = () => {
    if (name === '' || email === '' || phone === '' || city === '' || parentName === '' || parentNumber === '' || emergencyNumber === '' || rel2Student === '') {
      setError("All Fields Mandatory")
      return false;
    }
    if (!name.match(/^[a-zA-Z]/)) {
      setError("Name Should Only Contain Alphabets")
      return false;
    }
    if (!email.includes('@')) {
      setError("Email Must Contain '@'")
      return false;
    }
    if (!phone.match(/[0-9]/)) {
      setError("Phone Number Should be only Numeric ")
      return false;
    }
    if (phone.length != 10) {
      setError("Phone Number Should be Only 10 Digits")
      return false
    }
    if (!city.match(/[a-zA-Z]/)) {
      setError("City Name Cannot be Number")
      return false;
    }
    if (!parentName.match(/[a-zA-Z]/)) {
      setError("Parent/Guardian Name Cannot be Numbers")
      return false;
    }
    if (!parentNumber.match(/[0-9]/)) {
      setError("Parent's/Guardian's Number Can only be Numeric Digits")
      return false
    }
    if (parentNumber.length != 10) {
      setError("Parent's/Guardian's Number Should be of 10 Digits")
      return false
    }
    if (!emergencyNumber.match(/[0-9]/)) {
      setError("Emergency Number Can Only be Numeric Digits")
      return false;
    }
    if (emergencyNumber.length != 10) {
      setError("Emergency Number should be of 10 Digits")
      return false;
    }
    return true;
  }
  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    let isFormValid = isValid();
    if (isFormValid) {
      setIsSubmit(true)
    }
  }

  return (
    <div className="App">
      {
        !isSubmit &&
        <>
          <h1>School Registration Form</h1>
          <form onSubmit={handleSubmit}>
            {error}
            <div className="form-group">
              <label>Full Name: </label>
              <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div className="form-group">
              <label>Email: </label>
              <input type="text" name="" id="" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div className="form-group">
              <label>Phone Number: </label>
              <input type="text" name="" id="" onChange={(e) => setPhone(e.target.value)} value={phone} />
            </div>

            <div className="form-group">
              <label>City: </label>
              <input type="text" name="" id="" onChange={(e) => setCity(e.target.value)} value={city} />
            </div>

            <div className="form-group">
              <label>Parent/Guardian Name: </label>
              <input type="text" name="" id="" onChange={(e) => setParentName(e.target.value)} value={parentName} />
            </div>

            <div className="form-group">
              <label>Parent/Guardian Number: </label>
              <input type="text" name="" id="" onChange={(e) => setParentNumber(e.target.value)} value={parentNumber} />
            </div>

            <div className="form-group">
              <label>Emergency Number: </label>
              <input type="text" name="" id="" onChange={(e) => setEmergencyNumber(e.target.value)} value={emergencyNumber} />
            </div>

            <div className="form-group">
              <label>Relation to Student: </label>
              <input type="text" name="" id="" onChange={(e) => setRel2Student(e.target.value)} value={rel2Student} />
            </div>

            <button type="submit" className='btn-submit'>Submit</button>
          </form>
        </>
      }

      {isSubmit && <>
        <h1>Form Submitted</h1>
        <div className="data-group">
          <label>Full Name: </label>
          <p>{name}</p>
        </div>

        <div className="data-group">
          <label>Email: </label>
          <p>{email}</p>
        </div>

        <div className="data-group">
          <label>Phone Number: </label>
          <p>{phone}</p>
        </div>

        <div className="data-group">
          <label>City: </label>
          <p>{city}</p>
        </div>

        <div className="data-group">
          <label>Parent/Guardian Name: </label>
          <p>{parentName}</p>
        </div>

        <div className="data-group">
          <label>Parent/Guardian Number: </label>
          <p>{parentNumber}</p>
        </div>

        <div className="data-group">
          <label>Emergency Number: </label>
          <p>{emergencyNumber}</p>
        </div>

        <div className="data-group">
          <label>Relation to Student: </label>
          <p>{rel2Student}</p>
        </div>

        <button onClick={(e) => setIsSubmit(false)}>New Form</button>

      </>}
    </div>
  )
}

export default App;