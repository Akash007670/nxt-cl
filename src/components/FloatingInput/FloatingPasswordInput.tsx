import React from "react";
import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import FloatingInput from "./FloatingInput";

export interface PasswordInputProps
  extends React.ComponentProps<typeof FloatingInput> {}

const FloatingPasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleTogglePassword = (): void => {
      setShowPassword(!showPassword);
    };

    return (
      <FloatingInput
        label={label}
        type={showPassword ? "text" : "password"}
        endIcon={
          showPassword ? (
            <Eye
              size={16}
              onClick={handleTogglePassword}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <EyeOff
              size={16}
              onClick={handleTogglePassword}
              style={{ cursor: "pointer" }}
            />
          )
        }
        ref={ref}
        {...props}
      />
    );
  }
);

export default FloatingPasswordInput;
