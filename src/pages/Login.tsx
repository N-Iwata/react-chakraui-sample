import React, { ChangeEvent, memo, useState } from "react";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import PrimaryButton from "../components/atoms/button/PrimaryButton";
import { useAuth } from "../hooks/useAuth";

const Login: React.VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            loading={loading}
            disabled={userId === ""}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});

export default Login;
