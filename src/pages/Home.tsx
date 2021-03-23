import React, { memo } from "react";
import HeaderLayout from "../components/templates/HeaderLayout";

const Home: React.VFC = memo(() => {
  return (
    <HeaderLayout>
      <div>ホームページです</div>
    </HeaderLayout>
  );
});

export default Home;
