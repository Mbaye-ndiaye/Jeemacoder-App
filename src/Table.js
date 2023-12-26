 import Tbdoy from "./Tbody";
//  import Title from "./Tilte";


const Table = ({newUtilisateurs, handleDlete, updateUser}) => {
    return (
        <table className="table table-striped  text-center container w-100 mt-5">
            <thead>
                <tr>
                    <th scope="col">Prenom</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telephone</th>
                    <th scope="col">Action</th>
                    </tr>
            </thead>
            <Tbdoy newUtilisateurs={newUtilisateurs} handleDlete={handleDlete} updateUser={updateUser}/>
          {/* <Title /> */}
        </table>
           
    );
}
 
export default Table;