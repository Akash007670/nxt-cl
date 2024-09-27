import React from "react";
import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import Input from "./Input";

export interface PasswordInputProps
  extends React.ComponentProps<typeof Input> {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleTogglePassword = (): void => {
      setShowPassword(!showPassword);
    };

    return (
      <Input
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

export default PasswordInput;
