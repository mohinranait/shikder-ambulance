/**
 * Login User
 */
export const loginUser = async ({
  password,
  email,
}: {
  password: string;
  email: string;
}) => {
  const res = await fetch(`/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  });

  return await res.json();
};

// Authenticated user 
export const getAuthUser = async () => {
  const res = await fetch(`/api/user/auth`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Unauthorized or failed to fetch user");
  }

  return await res.json();
};

// Logout user
export const logoutUser = async () => {
  const res = await fetch(`/api/user/auth`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-type": "Application/json",
    },
  });
  return await res.json();
};

// Update user profile info
export const updateUserProfile = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  status?: string;
  profile?: string;
}) => {
  const res = await fetch(`/api/user/profile`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// Change user password
export const changeUserPassword = async (data: {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}) => {
  const res = await fetch(`/api/user/profile`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
