import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onValueChange?: (value: string) => void;
}

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface SelectContentProps {
  children?: React.ReactNode;
}

export interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children?: React.ReactNode;
}

export interface SelectValueProps {
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, onValueChange, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        onChange={(e) => onValueChange?.(e.target.value)}
        {...props}
      />
    );
  }
);

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
    );
  }
);

const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
        {children}
      </div>
    </div>
  );
};

const SelectItem: React.FC<SelectItemProps> = ({ className, children, ...props }) => {
  return (
    <option
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </option>
  );
};

const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => {
  return <span className="text-muted-foreground">{placeholder}</span>;
};

Select.displayName = "Select";
SelectTrigger.displayName = "SelectTrigger";
SelectContent.displayName = "SelectContent";
SelectItem.displayName = "SelectItem";
SelectValue.displayName = "SelectValue";

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue }; 