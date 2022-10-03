import { useLayoutEffect } from "react";
import { AuthLogin } from "../../app/auth/Login";
import { Container, SmallBox } from "../../styles/global";

export const Login = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main>
      <div className="bg-blues"></div>
      <Container>
        <div className="center-center">
          <SmallBox>
            <AuthLogin />
          </SmallBox>
        </div>
      </Container>
    </main >
  );
};
