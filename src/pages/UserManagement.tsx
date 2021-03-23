import React, { memo } from "react";
import HeaderLayout from "../components/templates/HeaderLayout";

const UserManagement: React.VFC = memo(() => {
  return (
    <HeaderLayout>
      <div>ユーザー管理ページです</div>
    </HeaderLayout>
  );
});

export default UserManagement;
