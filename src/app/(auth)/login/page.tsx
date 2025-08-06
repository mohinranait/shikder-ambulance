"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, LogIn, Lock, Mail, AlertCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { loginUser } from "@/actions/userApi";
import { useAuth } from "@/providers/AuthProvider";
import FooterComponent from "@/components/shared/footer";

export default function LoginPage() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  // If user is already login
  if (user) {
    router.push(redirectPath);
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      setIsLoading(true);
      const data = await loginUser(formData);

      if (data.success) {
        setIsLoading(false);
        setUser(data?.payload);
        toast.success("Login successfull");
        router.push(redirectPath);
      }
    } catch (error) {
      console.log(error);
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, check if email contains "error" to simulate an error
      if (formData.email.includes("error")) {
        throw new Error("Invalid email or password");
      }

      // Success - redirect to dashboard or home
      router.push("/");
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="/forgot-password"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-premium-gradient"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing in...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign In
                      </div>
                    )}
                  </Button>
                </form>
                {/* 
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Button variant="outline" className="bg-transparent">
                      <Image
                        src="/default.png?height=24&width=24"
                        alt="Google"
                        width={24}
                        height={24}
                        className="mr-2 h-4 w-4"
                      />
                      Google
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      <Image
                        src="/default.png?height=24&width=24"
                        alt="Facebook"
                        width={24}
                        height={24}
                        className="mr-2 h-4 w-4"
                      />
                      Facebook
                    </Button>
                  </div>
                </div> */}
              </CardContent>
              {/* <CardFooter className="flex flex-col">
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="text-primary font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </CardFooter> */}
            </Card>
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
