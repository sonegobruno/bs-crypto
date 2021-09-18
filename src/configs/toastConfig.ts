import { UseToastOptions } from '@chakra-ui/react';

export const config = {
  success,
  error,
  warning,
  info,
};

function success(title: string, description: string | null = null): UseToastOptions {
  return {
    title,
    description,
    status: 'success',
    variant: 'left-accent',
    duration: 9000,
    position: 'top-right',
    isClosable: true,
  };
}

function error(title: string, description: string | null = null): UseToastOptions {
  return {
    title,
    description,
    status: 'error',
    variant: 'left-accent',
    duration: 9000,
    position: 'top-right',
    isClosable: true,
  };
}

function warning(title: string, description: string | null = null): UseToastOptions {
  return {
    title,
    description,
    status: 'warning',
    variant: 'left-accent',
    duration: 9000,
    position: 'top-right',
    isClosable: true,
  };
}

function info(title: string, description: string | null = null): UseToastOptions {
  return {
    title,
    description,
    status: 'info',
    variant: 'left-accent',
    duration: 9000,
    position: 'top-right',
    isClosable: true,
  };
}
