import React, { ReactElement } from "react";

export interface ServiceCard {
  title: string;
  description: string;
  footer: string;
  icon: React.ReactNode;
}
export type ServiceCards = ServiceCard[];

export interface FormBuilderProps {
  name: string;
  label: string;
  children: ReactElement;
  description?: string | null;
  message?: string | null;
  control?: any;
  messageClassName?: string;
  descriptionClassName?: string;
  labelClassName?: string;
}
