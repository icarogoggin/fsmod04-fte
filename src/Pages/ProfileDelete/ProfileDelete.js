import React from 'react';
import { Api } from '../../Components/Api/api';
import { useHistory } from 'react-router';
import { NavBar } from '../../Components/NavBar/NavBar';


export default function ProfileDelete(props) {
  const id = props.match.params.id;
  const history = useHistory();

  const handleDelete = async (event) => {
    const response = await Api.buildApiDeleteRequest(
      Api.deleteProfileUrl(id),
      true,
    );

    if (response.status === 201) {
      history.push(`/`);
    } else {
      // Error
    }
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        Você tem certeza que deseja excluir esse item?
        <br />
        <br />
        <button className="deletebutton" onClick={handleDelete}>
          Confirmar exclusão
        </button>
      </div>
    </div>
  );
}
