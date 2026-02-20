import { toast } from '@heroui/react';

export const notify = {
  simple(message, description = '', timeout = 5000) {
    toast(message, {
      description: description ?? null,
      variant: 'default',
      timeout,
    });
  },
  success(title, description = '', timeout = 5000) {
    toast(title, {
      actionProps: {
        onPress: () => toast.clear(),
        variant: 'tertiary',
      },
      description: description ?? null,
      variant: 'success',
      timeout,
    });
  },
  error(title, description = '', timeout = 0) {
    toast(title, {
      actionProps: {
        onPress: () => toast.clear(),
        variant: 'tertiary',
      },
      description: description ?? null,
      variant: 'danger',
      timeout,
    });
  },
  warning(title, description = '', timeout = 5000) {
    toast(title, {
      actionProps: {
        onPress: () => toast.clear(),
        variant: 'tertiary',
      },
      description: description ?? null,
      variant: 'warning',
      timeout,
    });
  },
};
