import { useState } from "react";
import { useNavigate } from "react-router";
import { SERVER_URL } from "..";
import Button from "../components/Button.style";
import Card from "../components/Card.style";
import CardContent from "../components/CardContent.style";
import CardHeader from "../components/CardHeader.style";
import CenteredContainer from "../components/CenteredContainer.style";
import Input from "../components/Input.style";
import Link from "../components/Link.style";
import Subtitle from "../components/Subtitle.style";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (user) => {
    fetch(`${SERVER_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          password: user.password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.user));
          navigate("/");
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn({ email, password });
  };

  return (
    <CenteredContainer>
      <Card>
        <CardHeader title="Sign In Form" />
        <CardContent>
          <form onSubmit={handleSubmit} id="signin-form">
            <Input
              required
              name="email"
              placeholder="Email*"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              required
              name="password"
              placeholder="Password*"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button type="submit" form="signin-form" value="continue">
              Continue
            </Button>
            <Subtitle>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Subtitle>
          </form>
        </CardContent>
      </Card>
    </CenteredContainer>
  );
}
