import { Global } from "@emotion/react";
import { GlobalStyles } from 'constants';
import { Box } from 'components/Box';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {

  return (
    <>
      <Box p={30} border="1px solid black" >
        <Profile userData={user}
        />
      </Box>

      <Box p={30} border="1px solid black" >
        <Statistics title="Upload stats" stats={data} />
      </Box>

      <Box p={30} border="1px solid black" >
        <Statistics stats={data} />
      </Box>

      <Box p={30} border="1px solid black" >
        <FriendList friendSet={friends} />
      </Box>

      <Box p={30} border="1px solid black" >
        <TransactionHistory items={transactions} />
      </Box>

      <Global styles={GlobalStyles} />
    </>
  );
};
