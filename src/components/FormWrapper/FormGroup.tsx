import React, { ReactNode } from 'react';
import styles from './FormWrapper.module.css';

interface FormGroupProps {
  children: ReactNode;
  className?: string;
  inline?: boolean;
  style?: React.CSSProperties;
  id?: string;
}

const FormGroup = (props: FormGroupProps) => {
  return (
    <div
        id={props.id}
        className={`${props.inline ? styles.formItemInline : ''} ${props.className}`}
        style={props.style}
  >
    {props.children}
  </div>
  );
};

export default FormGroup;