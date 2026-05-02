"use server";

import { formSchema } from "../../lib/schema";

export async function registerAction(formData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await new Promise((res) => setTimeout(res, 1000));

  return {
    success: true,
    message: "Đăng ký thành công 🎉",
  };
}
