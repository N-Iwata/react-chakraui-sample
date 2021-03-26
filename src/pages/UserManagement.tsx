import React, { memo, useCallback, useEffect } from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/layout";

import HeaderLayout from "../components/templates/HeaderLayout";
import UserCard from "../components/organisms/user/UserCard";
import { useAllUsers } from "../hooks/useAllUsers";
import { useSelectUser } from "../hooks/useSelectUser";
import { Spinner } from "@chakra-ui/spinner";

import { useDisclosure } from "@chakra-ui/hooks";
import UserDetailModal from "../components/organisms/user/UserDetailModal";
import { useLoginUser } from "../hooks/useLoginUser";

const UserManagement: React.VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log("loginUser: ", loginUser);

  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback(
    (id) => {
      onSelectUser({ id, users, onOpen });
    },
    [onOpen, onSelectUser, users]
  );

  return (
    <HeaderLayout>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        isAdmin={loginUser?.isAdmin}
      />
    </HeaderLayout>
  );
});

export default UserManagement;
