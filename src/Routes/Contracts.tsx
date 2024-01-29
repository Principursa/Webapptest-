import React, { useState } from 'react'
import {getBlock} from "@wagmi/core"
import {useAccount} from "wagmi"
import {config} from "../configs/config"

function Contracts() {

    const account = useAccount()

  return (
    <>
    <div>
        {account.address}
        {account.chainId}
    </div>
</>
  )
}

export default Contracts