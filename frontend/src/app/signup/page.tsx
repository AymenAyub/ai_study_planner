import type { Metadata } from "next";
import AuthCard from "@/components/auth/AuthCard";
import SignupForm from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Create Account — StudyFlow AI",
  description: "Sign up for StudyFlow AI to generate intelligent, adaptive study roadmaps.",
};

export default function SignupPage() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Start planning your studies smarter."
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLinkHref="/login"
    >
      <SignupForm />
    </AuthCard>
  );
}
