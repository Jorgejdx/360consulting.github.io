export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export interface ServiceOption {
  value: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  hours: {
    weekdays: string;
    saturday: string;
  };
}

export interface ContactHeroProps {
  title: string;
  subtitle: string;
  badgeText: string;
}

export interface ContactFormProps {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  services: ServiceOption[];
  onFormDataChange: (field: keyof ContactFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface ContactInfoProps {
  contactInfo: ContactInfo;
}

export interface ContactSuccessProps {
  onBackToHome: () => void;
  onSendAnother: () => void;
} 