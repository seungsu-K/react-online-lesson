// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from 'react';

function Register() {
  // const [name, setName] = useState('');
  // const [birth, setBirth] = useState('');
  // const [country, setCountry] = useState('');
  // const [bio, setBio] = useState('');

  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  console.log(input);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // const onChangeName = (e) => {
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   });
  // };

  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };

  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   });
  // };

  return (
    <div>
      <div>
        <input
          value={input.name}
          name="name"
          onChange={onChange}
          placeholder={'이름'}
        />
      </div>
      <div>
        <input
          value={input.birth}
          name="birth"
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select value={input.country} name="country" onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} name="bio" onChange={onChange} />
      </div>
    </div>
  );
}

export default Register;
