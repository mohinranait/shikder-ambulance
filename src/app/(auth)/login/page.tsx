

import { Header } from "@/components/shared/header";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock, } from "lucide-react";
// import { useAuth } from "@/providers/AuthProvider";
import FooterComponent from "@/components/shared/footer";
import LoginForm from "./components/LoginForm";


export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {

  const params = await searchParams;

  return (
    <>
      <div className="min-h-screen bg-premium-light-gradient">
        <Header />

        <main className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              <Card className="border-0 shadow-premium">
                <CardHeader className="space-y-1 text-center">
                  <div className="flex justify-center mb-2">
                    <div className="h-12 w-12 rounded-full bg-premium-gradient flex items-center justify-center">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    Welcome back
                  </CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>

                  <LoginForm redirectPath={params.redirect || "/"} />

                </CardContent>

              </Card>
            </div>
          </div>
        </main>

        <FooterComponent />
      </div>

    </>
  );
}
