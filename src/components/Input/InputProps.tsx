import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib/cjs';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}
