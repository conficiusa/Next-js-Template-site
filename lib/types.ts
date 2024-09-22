import React, { ReactElement } from "react";

export interface ServiceCard {
  title: string;
  description: string;
  footer: string;
  icon: string;
}
export type ServiceCards = ServiceCard[];

//form builder props
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

//FAQ data
export interface FAQ {
  title: string;
  content: string;
}
export type FaqData = FAQ[];
