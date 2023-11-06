import AuthLayout from "@/components/layouts/auth-layout";
import { UserAuthRegisterForm } from "@/components/form/authentication/user-auth-register-form";

export const metadata = {
  title: "Join Seelocal • Seelocal",
  description: "Showcase and discover remarkable places.",
};

const Register = () => {
  return (
    <AuthLayout
      options={{
        title: "Create an account",
        description: "Enter your email below to create your account",
        altAuth: {
          link: "/login",
          preText: "Already have an account? ",
          postText: "Sign in",
        },
      }}
    >
      <UserAuthRegisterForm />
    </AuthLayout>
  );
};

export default Register;
