import Vue from "vue";

const util = require("@polkadot/util-crypto");

const prefixes = {
  polkadot: 0,
  kusama: 2,
  plasm: 5,
  bifrost: 6,
  edgeware: 7,
  karura: 8,
  reynolds: 9,
  acala: 10,
  laminar: 11,
  chainx: 13,
  kulupu: 16,
  darwinia: 18,
  stafi: 20,
  robonomics: 32,
  centrifuge: 36,
  substrate: 42,
  chainx: 44
};

Vue.filter("prefix", (value, prefix) => {
  if (typeof prefix !== "number") {
    prefix = prefixes[prefix] || 0;
  }

  let decoded = util.decodeAddress(value);

  return util.encodeAddress(value, prefix);
});
