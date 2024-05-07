import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: '남지',
    title: '개발자',
    mentor: {
      name: '지훈',
      title: '시니어개발자',
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const answerName = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name: answerName },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const answerTitle = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title: answerTitle },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
