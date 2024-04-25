import React from 'react';
import '../Form/Form.css';

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor='name'>Name:</label><br/><br/>
          <input id='name' type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email:</label><br/><br/>
          <input id='email' type='email' />
        </div>
        <div>
          <label htmlFor='message'>Message:</label><br/><br/>
          <textarea id='message' />
        </div>
        <button type='submit' className='email-button'>Send Email</button>
      </form>
    </div>
  );
}

export default Form;
