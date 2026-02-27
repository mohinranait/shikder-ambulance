"use client";

import { useState, useEffect } from "react";
import { Mail, Cloud } from "lucide-react";
import { Loader2 } from "lucide-react";
import { ConfigCard } from "./components/ConfigCard";
import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";

interface AppConfig {
  email: {
    user: string;
    password: string;
    status: boolean;
  };
  cloudinary: {
    name: string;
    key: string;
    secret: string;
    status: boolean;
  };
}

function AdminPanel() {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch config on mount
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("/api/config");
        const result = await response.json();
        
        if (result.success) {
          setConfig(result.data);
        
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const updateConfigAPI = async (
    section: string,
    data?: Record<string, string>,
    status?: boolean,
  ) => {
    try {
      setIsSaving(true);
      const response = await fetch("/api/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ section, data, status }),
      });

      const result = await response.json();
      if (result.success) {
        setConfig(result.data);
      }
    } catch (error) {
      console.error("Failed to update config:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleEmailStatusChange = (newStatus: boolean) => {
    updateConfigAPI("email", undefined, newStatus);
  };

  const handleCloudinaryStatusChange = (newStatus: boolean) => {
    updateConfigAPI("cloudinary", undefined, newStatus);
  };

  const handleEmailSave = (data: Record<string, string>) => {
    updateConfigAPI("email", data);
  };

  const handleCloudinarySave = (data: Record<string, string>) => {
    updateConfigAPI("cloudinary", data);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-accent animate-spin" />
          <p className="text-muted-foreground">Loading configuration...</p>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive">Failed to load configuration</p>
      </div>
    );
  }

  return (
    <>
      <Navbar fixed />
      <Main>
        <div className="space-y-8">
         

          {/* Configuration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Configuration */}
            <ConfigCard
              title="Email Configuration"
              icon={<Mail className="w-8 h-8" />}
              fields={[
                {
                  name: "user",
                  label: "Email Address",
                  type: "text",
                  value: config.email.user,
                },
                {
                  name: "password",
                  label: "Password",
                  type: "password",
                  value: config.email.password,
                },
              ]}
              status={config.email.status}
              onStatusChange={handleEmailStatusChange}
              onSave={handleEmailSave}
              isSaving={isSaving}
            />

            {/* Cloudinary Configuration */}
            <ConfigCard
              title="Cloudinary Configuration"
              icon={<Cloud className="w-8 h-8" />}
              fields={[
                {
                  name: "name",
                  label: "Cloud Name",
                  type: "text",
                  value: config.cloudinary.name,
                },
                {
                  name: "key",
                  label: "API Key",
                  type: "password",
                  value: config.cloudinary.key,

                },
                {
                  name: "secret",
                  label: "API Secret",
                  type: "password",
                  value: config.cloudinary.secret,
                },
              ]}
              status={config.cloudinary.status}
              onStatusChange={handleCloudinaryStatusChange}
              onSave={handleCloudinarySave}
              isSaving={isSaving}
            />
          </div>
        </div>
      </Main>
    </>
  );
}

export default AdminPanel;
