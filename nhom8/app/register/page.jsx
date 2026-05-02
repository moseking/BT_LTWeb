"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../lib/schema";
import { registerAction } from "../actions/register";
import { useState } from "react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState({});
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError({});
    setSuccess("");

    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => formData.append(k, v));

    const res = await registerAction(formData);
    setLoading(false);

    if (!res.success) {
      setServerError(res.errors);
    } else {
      setSuccess(res.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🚀 Đăng ký</h2>

        <form
          onSubmit={handleSubmit(onSubmit, (errors) => {
            const first = Object.keys(errors)[0];

            const el = document.querySelector(`[name="${first}"]`);
            el?.focus();

            el?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          })}
          style={styles.form}
        >
          {/* Email */}
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              style={styles.input}
            />
            <p style={styles.error}>
              {errors.email?.message || serverError.email?.[0]}
            </p>
          </div>

          {/* Password */}
          <div style={{ position: "relative" }}>
            <input
              type={showPass ? "text" : "password"}
              {...register("password")}
              placeholder="Mật khẩu"
              style={styles.input}
            />
            <span onClick={() => setShowPass(!showPass)} style={styles.eye}>
              👁️
            </span>
            <p style={styles.error}>
              {errors.password?.message || serverError.password?.[0]}
            </p>
          </div>

          {/* Confirm */}
          <div>
            <input
              type={showPass ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Xác nhận mật khẩu"
              style={styles.input}
            />
            <p style={styles.error}>
              {errors.confirmPassword?.message ||
                serverError.confirmPassword?.[0]}
            </p>
          </div>

          <button disabled={loading} style={styles.button}>
            {loading ? "Loading..." : "Đăng ký"}
          </button>
        </form>

        {success && <p style={styles.success}>{success}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "380px",
    padding: "30px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 0 30px rgba(59,130,246,0.3)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #374151",
    background: "#020617",
    color: "white",
    outline: "none",
  },
  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(to right, #3b82f6, #9333ea)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  error: {
    color: "#f87171",
    fontSize: "12px",
  },
  success: {
    color: "#4ade80",
    textAlign: "center",
    marginTop: "10px",
  },
  eye: {
    position: "absolute",
    right: "10px",
    top: "10px",
    cursor: "pointer",
  },
};
