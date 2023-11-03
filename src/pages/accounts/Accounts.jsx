import React from 'react'
import accountsData from '../../data/AccountsData'
import './Accounts.css'

function Accounts() {
  const accountsMap = accountsData.map((account, i) => {
    return (
      <div className="account-container" key={i}>
        <img src={account.icon} />
        <h2>{account.text}</h2>
      </div>
    )
  })

  return (
    <div className="accounts-page">
      <h1>Accounts</h1>
      <div className='accounts-container'>
        {accountsMap}
      </div>
    </div>
  )
}

export default Accounts
