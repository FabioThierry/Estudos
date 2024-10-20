import React from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axios";
import { get } from "lodash";
import { toast } from "react-toastify";

import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from "react-icons/fa";
import { Container } from "../../styles/GlobalStyles";
import { AlunoContainer, ProfilePicture } from "./styled";

import Loading from "../../components/Loading";

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getAlunos() {
      setIsLoading(true);
      const response = await axios.get("/alunos");
      setAlunos(response.data);
      setIsLoading(false);
    }

    getAlunos();
  }, []);

  const handleDelete = async (e, id) => {
    try {
      e.target.parentElement.remove();

      await axios.delete(`/alunos/${id}`);
    } catch (e) {
      const errors = get(e, "response.data.errors", []);
      errors.map((error) => toast.error(error));
      console.log(e);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={aluno.id}>
            <ProfilePicture>
              {get(aluno, "Fotos.[0].filename_url") ? (
                <img
                  crossOrigin="anonymous"
                  src={get(aluno, "Fotos[0].filename_url")}
                  alt="Foto do Aluno"
                />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>

            <Link
              onClick={(e) => handleDelete(e, aluno.id)}
              to={`/aluno/${aluno.id}/delete`}
            >
              <FaWindowClose size={16} />
            </Link>
            <FaExclamation size={16} display="none" cursor="pointer" />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
