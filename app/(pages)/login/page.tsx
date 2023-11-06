import { UserAuthLoginForm } from "@/components/form/authentication/user-auth-login-form";
import AuthLayout from "@/components/layouts/auth-layout";

export const metadata = {
  title: "Sign in to Seelocal • Seelocal",
  description: "Showcase and discover remarkable creators",
};

const Login = () => {
  return (
    <>
      <AuthLayout
        options={{
          title: "Welcome back",
          description:
            "Returning to our vibrant community? Sign in to access our exclusive content and deals!",
          altAuth: {
            link: "/register",
            preText: "Don't have an account yet? ",
            postText: "Sign up",
          },
        }}
      >
        <UserAuthLoginForm />
      </AuthLayout>
    </>
  );
};

export default Login;
