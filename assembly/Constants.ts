import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Stealth RUN NFT";
  export const SYMBOL: string = "SRUN";
  export const MINT_PRICE: u64 = 80000000000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 250;
  export const URI: string = "https://stingy-silver-mule.myfilebase.com/ipfs/Qma3UEo2z5L9TRAcZtyRv6DJ8F78vnWHuo9nA4LRRz5pJ3/";
  export const OWNER: Uint8Array = Base58.decode("14ZqhNkAD6v12ZKdUiUFd3xwSY7wQaEzsB");

  // token mint 
  export const TOKEN_PAY: Uint8Array = Base58.decode("14MjxccMUZrtBPXnNkuAC5MLtPev2Zsk3N"); // USDT
  export const ADDRESS_PAY: Uint8Array = Base58.decode("14ZqhNkAD6v12ZKdUiUFd3xwSY7wQaEzsB"); // owner
  export const RUN_TOKEN: Uint8Array = Base58.decode("18JRrBdnNqQ99faV6sn6Un1MbvU5sZWgzf");
}