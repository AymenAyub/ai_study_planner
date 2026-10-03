import type { Metadata } from "next";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log In — StudyFlow AI",
  description: "Log in to your StudyFlow AI account to access your adaptive study schedules.",
};

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in to continue planning your studies."
      footerText="Don't have an account?"
      footerLinkText="Create an account"
      footerLinkHref="/signup"
    >
      <LoginForm />
    </AuthCard>
  );
}
