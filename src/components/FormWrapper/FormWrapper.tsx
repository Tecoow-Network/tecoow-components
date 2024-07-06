import React, { ReactNode } from 'react';

interface FormWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const FormWrapper = (props: FormWrapperProps) => {
  return (
    <div id= {props.id} className={props.className} style={props.style}>
      {props.children}
    </div>
  );
};

export default FormWrapper;