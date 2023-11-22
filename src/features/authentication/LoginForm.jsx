import { useState } from "react";

import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("alex@example.com");
  const [password, setPassword] = useState("testtest");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Login</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
