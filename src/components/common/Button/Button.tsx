import { forwardRef } from 'react';
import clsx from 'clsx';

import Spinner from '@/components/common/Spinner';

const variants = {
  primary: 'bg-red-600 text-white hover:bg-gray-50 hover:text-red-600',
  inverse: 'bg-white text-red-600 hover:bg-red-600 hover:text-white',
  danger: 'bg-red-600 text-white hover:bg-red-50:text-red-600',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex max-h-10 justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none transition-all duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span>{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
