import React, { memo, useEffect } from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/layout";

import HeaderLayout from "../components/templates/HeaderLayout";
import UserCard from "../components/organisms/user/UserCard";
import { useAllUsers } from "../hooks/useAllUsers";
import { Spinner } from "@chakra-ui/spinner";

const UserManagement: React.VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers, [getUsers]);
  return (
    <HeaderLayout>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </HeaderLayout>
  );
});

export default UserManagement;
