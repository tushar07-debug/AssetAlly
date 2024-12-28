import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home=()=> {
    const loggedIn = {firstName:'Tushar', lastName:'Kumar Singh', email:'tusharsingh102003@gmail.com'};
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.firstName||'Guest'}
                  subtext="Access and manage your account and transcation efficiently."
                />
                <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />

          </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{},{}]}
        />
    </section>
  )
}

export default Home