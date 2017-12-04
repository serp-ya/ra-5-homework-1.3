'use strict';
function FeedbackForm(props) {
  const { data, onSubmit } = props;
  const submitJSON = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    let sendingData = '';

    for (const [key, value] of formData) {
      sendingData += `${key}: ${value}; `;
    }

    onSubmit(JSON.stringify(sendingData));
  };

  return (
    <form className="content__form contact-form" onSubmit={submitJSON}>
      <FormHeader title="Чем мы можем помочь?"/>
      <SalutationGroup defaultCheckedValue={data.salutation} />
      <NameGroup defaultValue={data.name} />
      <EmailGroup defaultValue={data.email} />
      <SubjectGroup defaultValue={data.subject} />
      <MessageGroup defaultValue={data.message} />
      <SnacksGroup defaultValue={data.snacks} />

      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result" />
    </form>
  );
}

function FormHeader({title}) {
  return (
    <div className="testing">
      <p>{title}</p>
    </div>
  );
}

function SalutationGroup({defaultCheckedValue}) {
  const salutationOptions = [
    {
      name: 'salutation-mr',
      value: 'Мистер'
    },
    {
      name: 'salutation-mrs',
      value: 'Мисис'
    },
    {
      name: 'salutation-ms',
      value: 'Мис'
    }
  ];
  const salutationFieldElements = salutationOptions.map((option, index) => {
    return ([
      <input
        key={`input-${index}`}
        className="contact-form__input contact-form__input--radio"
        id={option.name}
        name="salutation"
        type="radio"
        value={option.value}
        defaultChecked={option.value === defaultCheckedValue}
      />,
      <label key={`label-${index}`} className="contact-form__label contact-form__label--radio" htmlFor={option.name}>{option.value}</label>
    ]);
  });

  return (
    <div className="contact-form__input-group">
      {salutationFieldElements}
    </div>
  );
}

function NameGroup({defaultValue}) {
  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="name">Имя</label>
      <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={defaultValue} />
    </div>
  );
}

function EmailGroup({defaultValue}) {
  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
      <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={defaultValue} />
    </div>
  );
}

function SubjectGroup({defaultValue}) {
  const subjectThemes = [
    'У меня проблема',
    'У меня важный вопрос'
  ];
  const subjectOptionElements = subjectThemes.map((theme, index) => <option key={index} value={theme}>{theme}</option>);

  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
      <select className="contact-form__input contact-form__input--select" id="subject" name="subject" value={defaultValue}>
        {subjectOptionElements}
      </select>
    </div>
  );
}

function MessageGroup({defaultValue}) {
  return (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
      <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" value={defaultValue}></textarea>
    </div>
  );
}

function SnacksGroup({defaultValue}) {
  const snacksOptions = [
    {
      name: 'snacks-pizza',
      value: 'Пиццу'
    },
    {
      name: 'snacks-cake',
      value: 'Пирог'
    }
  ];
  const snacksElements = snacksOptions.map((snack, index) => {
    return ([
      <input
        key={`input-${index}`}
        className="contact-form__input contact-form__input--checkbox"
        id={snack.name}
        name="snacks"
        type="checkbox"
        value="пицца"
        defaultChecked={defaultValue.some(el => el.toLocaleLowerCase() === snack.value.toLocaleLowerCase())}
      />,
      <label key={`label-${index}`} className="contact-form__label contact-form__label--checkbox" htmlFor={snack.name}>{snack.value}</label>
    ]);
  });

  return (
    <div className="contact-form__input-group">
      <p className="contact-form__label--checkbox-group">Хочу получить:</p>
      {snacksElements}
    </div>
  );
}