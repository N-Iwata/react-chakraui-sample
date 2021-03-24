import React, { ReactNode } from "react";
import { Button } from "@chakra-ui/button";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

const PrimaryButton: React.VFC<Props> = (props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      onClick={onClick}
      bg="teal.400"
      color="white"
      disabled={disabled || loading}
      isLoading={loading}
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
