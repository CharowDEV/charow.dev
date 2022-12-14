---
slug: "disable-site-suggested-gas-fee-in-metamask-using-web3js"
date: "2022-06-29"
title: "Disable site suggested gas fee in Metamask using web3.js"
description: "Use the build-in tracker from MetaMask to calculate the gas fee for transactions and avoid the site suggested gas fee from web3.js."
author: "Charow"
pfp: "/images/profile-picture.jpg"
banner: "/media/site-suggested-gas-fee/banner.jpg"
banner_alt: "Metamask showing a site suggested gas fee"
banner_caption: ""
banner_caption_link: ""
---

In the process of connecting a smart contract to a webapplication using the web3.js library I found out that MetaMask will use a gas fee that is suggested by your website. Even if you didn't define it yourself, because the web3.js library creates it's own values (version 1.7.4). By default the values are so low that the transaction will most likely fail. 

The solution could be specifying a custom gas fee, but I was looking for a way to use the integrated gas fee tracker from MetaMask itself. Most of the time the gas fee suggested by MetaMask is good enough and will dynamically adjust to the current network conditions/demand.

You can disable the website suggested gas fee by defining `maxPriorityFeePerGas` and `maxFeePerGas` as `null`. Pass them as parameter to the `.send()` function and from now on MetaMask will no longer show the "site suggested" gas fee.

```ts
const contract = new web3.eth.Contract(contractABI as AbiItem[], contractAddress as string);

export const transfer = async () => {
    await contract.methods
        .transfer(recipient, amount)
        .send(
            from: userAddress, 
            gas: 70000, 
            maxPriorityFeePerGas: null, 
            maxFeePerGas: null
        );
};
```

This is useful if you don't want to specify a custom gas fee by yourself. Also Checkout the [website](https://charowdev.github.io/blog--disable-site-suggested-gas-fee-in-metamask-using-web3js/) I quickly build to demonstrate the difference.

➡️ [GitHub repository](https://github.com/charowdev/blog--disable-site-suggested-gas-fee-in-metamask-using-web3js)