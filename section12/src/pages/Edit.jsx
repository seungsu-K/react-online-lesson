import { useParams } from 'react-router-dom';

function Edit() {
  const params = useParams();
  return <div>{params.id}번 일기</div>;
}

export default Edit;
