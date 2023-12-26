const Tbody = ({newUtilisateurs, handleDlete, updateUser}) => {
    return (

            <tbody>
                {newUtilisateurs.map((item) => (

                <tr key={item.id}>
                    <td>{item.prenom}</td>
                    <td>{item.nom}</td>
                    <td>{item.email}</td>
                    <td>{item.telephone}</td>
                    <td>
                        <button className='bg-warning text-white p-2 rounded-2' onClick={() => updateUser(item.id)}>Modifier</button>
                        <button className='bg-danger text-white p-2 rounded-2 me-2'onClick={() => handleDlete(item.id)}>Supprimer</button>
                    </td>
                </tr>
                ))}
            </tbody>
    );
}
 
export default Tbody;