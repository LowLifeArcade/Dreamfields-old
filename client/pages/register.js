import { useState } from 'react';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.table({name, email, password, confirmPassword})
  };
  return (
    <>
      <div className="container background">
        <form
          onSubmit={handleSubmit}
          className="form"
          action="submit"
        >
          <Card
            title="Register"
            imgTitle="Dream Fields"
            imgSubTitle="If you come, they will build it."
            img="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
          >
            <FormInput value={name} onChange={setName} htmlFor="Name" type="text" placeholder="Enter Name" />
            <FormInput value={email} onChange={setEmail} htmlFor="Email" type="text" placeholder="Enter Email" />
            <FormInput
              value={password} onChange={setPassword} htmlFor="Password"
              type="password"
              placeholder="Enter New Password"
            />
            <FormInput
              value={confirmPassword} onChange={setConfirmPassword} htmlFor="Password"
              type="password"
              placeholder="Confirm Password"
            />
            <div className="btn">
              <Button buttonName="Submit" color="lightblue" />
            </div>
          </Card>
        </form>
        <style jsx>
          {`
            .btn {
              margin-top: 30px;
            }
            .background {
              background: rgb(192, 192, 192);
              height: 100vh;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Register;
