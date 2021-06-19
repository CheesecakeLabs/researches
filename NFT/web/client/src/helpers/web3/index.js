import { ethers } from "ethers";

export const toEther = (value) => ethers.utils.parseEther(value);

export const toBigNumber = (value) => ethers.BigNumber.from(value);
