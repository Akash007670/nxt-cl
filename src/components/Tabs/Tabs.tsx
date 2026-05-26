import React, { HTMLAttributes, ReactNode } from "react";
import "./Tabs.css";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export interface TabsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeId,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <div className={`tabs ${className}`} {...props}>
      <div className="tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={tab.id === activeId ? "tabs-tab active" : "tabs-tab"}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-panel">
        {tabs.find((tab) => tab.id === activeId)?.content}
      </div>
    </div>
  );
};

export default Tabs;
