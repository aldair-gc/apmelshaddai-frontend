import { AuthLogin } from "../../app/auth/Login";
import { Container, SmallBox } from "../../styles/global";

export const Login = () => {

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
