"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/presentation/components/ui/card";
import { Input } from "@/src/presentation/components/ui/input";
import { Label } from "@/src/presentation/components/ui/label";
import { Button } from "@/src/presentation/components/ui/button";
import UseLogin from "./useLogin";

export default function LoginPage() {
  const { email, setEmail, password, setPassword, loading, handleLogin } =
    UseLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-xl border">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold">
            Welcome back
          </CardTitle>
          <p className="text-center text-sm text-gray-500">
            Login to your account
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Email */}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <Button className="w-full" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>

          {/* Footer */}
          <div className="text-center text-xs text-gray-400">
            Secure login powered by Next.js
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
