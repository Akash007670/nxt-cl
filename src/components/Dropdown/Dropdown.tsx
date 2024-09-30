import React, { useEffect, useRef, useState } from "react";
import { FloatingInput } from "../FloatingInput";
import { ChevronDown, ChevronUp } from "react-feather";
import "./Dropdown.css";
import { Input } from "../Input";

export type Option = {
  id?: number | string;
  name?: string;
  value: string;
};

export interface IDropdownProps {
  options: Option[] | string[];
  onSelect: (option: Option | string) => void;
  inputType: "floating" | "standard";
  label?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  isSearchable?: boolean;
  multiselect?: boolean;
  hasError?: boolean;
}

export const Dropdown: React.FC<IDropdownProps> = (props: IDropdownProps) => {
  const {
    options = [],
    onSelect,
    inputType = "standard",
    label = "Select",
    className,
    loading = false,
    disabled = false,
    isSearchable = false,
    multiselect = false,
    hasError = false,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | string | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference to the dropdown

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle dropdown open/close
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Check if an item is an Option type
  // The function takes one argument, option, which could be of type (Option | string).
  // The return type of the function is option is Option and it tells if this function returns true, then the option is of type Option. Otherwise, it's not.
  function isOption(option: Option | string): option is Option {
    // (option as Option) This casts option to the Option type, letting TypeScript know we are treating it like an Option (temporarily).
    //  This is necessary because TypeScript can't infer the type directly from a union (Option | string) without extra help.
    return (option as Option).value !== undefined;

    // Every Option object has a value property (as per Option type definition), but a string doesn’t.
    // If option.value is not undefined, it means option is indeed an Option type, not a plain string.
  }

  // Handle option selection
  const handleOptionSelect = (option: Option | string) => {
    setSelectedOption(option);
    onSelect(option); // Pass the selected option to the parent component
    setIsOpen(false); // Close dropdown after selection
  };

  //Helper function to display value
  const getDisplayValue = (option: Option | string | null) => {
    if (!option) return "";
    if (isOption(option)) return option.name ?? option.value; // Return name or value for Option type
    return option; //the string
  };

  return (
    <div
      ref={dropdownRef}
      className={`dd-container ${disabled ? "dd-disabled" : ""} ${className}`}
    >
      {inputType === "floating" ? (
        <>
          <FloatingInput
            type="text"
            label={label}
            value={getDisplayValue(selectedOption)}
            endIcon={
              isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />
            }
            onClick={toggleDropdown}
            disabled={disabled}
            style={{ cursor: "pointer" }}
            variant={hasError ? "danger" : "default"}
            readOnly={isSearchable ? false : true}
          />
        </>
      ) : (
        <>
          <label>{label}</label>
          <Input
            type="text"
            placeholder="Select"
            value={getDisplayValue(selectedOption)}
            endIcon={
              isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />
            }
            onClick={toggleDropdown}
            disabled={disabled}
            style={{
              cursor: "pointer",
            }}
            variant={hasError ? "danger" : "default"}
            readOnly={isSearchable ? false : true}
          />
        </>
      )}
      <div className={`dd-list ${isOpen ? "open" : "closed"}`}>
        {loading ? (
          <div className="dd-item">Loading...</div>
        ) : (
          options.map((option, index) => (
            <div
              key={isOption(option) ? option.id ?? index : index}
              className="dd-item"
              onClick={() => handleOptionSelect(option)}
            >
              {isOption(option) ? option.name ?? option.value : option}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
