import React, { useState } from 'react';
import { LoginFormContainer, FormTitle, InputGroup, Label, Input, SubmitButton, ErrorMessage } from './styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password) {
      setError('');
      console.log('Form submitted:', { email, password });
    } else {
      setError('Please fill out both fields');
    }
  };

  return (
    <LoginFormContainer>
      <FormTitle>Login</FormTitle>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit">Login</SubmitButton>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
