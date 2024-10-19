import React from "react";
import Link from "react-router-dom/Link";
import axios from "../../services/axios";
import { get } from "lodash";

import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa";
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

            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
