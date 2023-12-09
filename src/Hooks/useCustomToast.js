import { useToast } from '@chakra-ui/react';
import { useRef } from 'react';

export const useCustomToast = () => {
  const toast = useToast();
  const toastIdRef = useRef();

  const showToast = (title, description, status = "success") => {
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, {
        title,
        description,
        status,
        duration: 3000,
        isClosable: true,
        onCloseComplete: () => {
          toastIdRef.current = null;
        }
      });
    } else {
      toastIdRef.current = toast({
        title,
        description,
        status,
        duration: 3000,
        isClosable: true,
        onCloseComplete: () => {
          toastIdRef.current = null;
        }
      });
    }
  };

  return showToast;
};
