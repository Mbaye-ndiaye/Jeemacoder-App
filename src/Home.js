 import  { useState } from 'react'
  import Table from './Table'
  


const Home = () => {
  const [inputs, setInputs] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    modifier: false,
    idModifier: null
  });
   const [user, setUser] = useState([])
// une fonction qui recupere les valuers d'inputs
  const handleChange = (e) => {
    setInputs({
      ...inputs,[e.target.name]:e.target.value,
    })
 
    
  }
// permet de submettre le formulaire
  const handleSubmit = (e) => {
     e.preventDefault();
     const {prenom, nom, email, telephone, modifier, idModifier} = inputs
     if(modifier !== false){
     setInputs((prev) => {
          const users = user.find(user => user.id === idModifier)
          const updateUtilisateur = {
              ...users,
              prenom: prenom,
              nom: nom,
              email: email,
              telephone: telephone,
              // modifier: idModifier
          }
          const updatedUsers = user.map(user => user.id === idModifier ? updateUtilisateur : user)
          return updatedUsers
          // {
          //   updatedUsers: updatedUsers,
          //     prenom: '',
          //     nom: '',
          //     email: '',
          //     telephone: '',
          //     idModifier: null,
          //     modifier: false
          // }
      })
  } else {
     const newUtilisateurs = {
      id: Math.floor(Math.random() * 10000),
      prenom: prenom,
      nom: nom,
      email: email,
      telephone: telephone, 
    }
    console.log('newUtilisateurs', newUtilisateurs);  
    setUser([...user, newUtilisateurs])
      setInputs({
        prenom:'',
        nom:'',
        email:'',
        telephone:''
      })
      console.log('setUser', setUser);
    }
    }
  
// Fonction de supprimer
    const handleDlete = (userId) => {
      const deletUser = user.filter(index => index.id !== userId)
      setUser(deletUser)
    }

// Modifier  le formulaire
    const updateUser = (id) => {
      const updateUtilisateur = user.find(todo => todo.id === id)
 setInputs(prev => ({
  ...prev,
     modifier: true,
     prenom: updateUtilisateur.prenom,
     nom: updateUtilisateur.nom,
     email: updateUtilisateur.email,
     telephone: updateUtilisateur.telephone, 
     idModifier: id
 }))
}

  return (
        <div className="w-75 mx-auto py-5">
          <h1 className='text-center fs-4 mb-3'>JeemaCoder Avec Hook</h1>
          <form className='container row shadow' onSubmit={handleSubmit}>
    
          <div className="mb-3 col-md-6 mt-3">
        <label htmlFor='text' className="form-label">Prenom</label>
        <input 
        htmlFor="text" 
        className="form-control" 
        name="prenom" 
        value={inputs.prenom} 
        onChange={handleChange} />
      </div>
    
      <div className="mb-3 col-md-6 mt-3">
        <label htmlFor='text' className="form-label">Nom</label>
        <input 
        htmlFor="text" 
        className="form-control" 
        name="nom" 
        value={inputs.nom} 
        onChange={handleChange} />
      </div>
    
      <div className="mb-3 col-md-6">
        <label htmlFor='text' className="form-label">Email</label>
        <input 
        htmlFor="email" 
        className="form-control" 
        name="email"
        value={inputs.email} 
        onChange={handleChange} />
      </div>
    
      <div className="mb-3 col-md-6">
        <label htmlFor='text' className="form-label">Telephone</label>
        <input 
        htmlFor="number" 
        className="form-control" 
        name="telephone" 
        value={inputs.telephone} 
        onChange={handleChange} />
      </div>
      
      <button type="submit" className={inputs.modifier ? "btn btn-warning  mb-3" : 'btn btn-success mb-3'}>{inputs.modifier ? 'Modifier' : 'Ajouter' }</button>
    </form>
    <Table newUtilisateurs={user} handleDlete={handleDlete} updateUser={updateUser}/>
        </div>
  )
}

export default Home;
