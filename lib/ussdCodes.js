export const AirtimeCodes = [
  {
    title: "Check Balance",
    code: "*310#",
    icon: "wallet-outline",
  },
  {
    acceptInput:true,
    title: "Recharge Airtime",
    code: "*311#",
    icon: "card-outline",
  },
  {
    title: "Borrow Airtime",
    code: "*303#",
    icon: "business-outline",
  },
  {
    acceptInput:true,
    title: "Share Airtime",
    icon: "gift-outline",
    shareType: {
      title:"airtime",
      subCode:"2",}
  },
];
export const DataCodes = [
  {
    title: "Check Data Balance",
    code: "*323#",
    icon: "wallet-outline",
  },
  {
    title: "Buy data",
    code: "*312#",
    icon: "card-outline",
  },
  {
    title: "Borrow Data",
    code: "*303#",
    icon: "business-outline",
  },
  {
    acceptInput:true,
    title: "Share Data",
    icon: "gift-outline",

    shareType: {
    title:"data",
    subCode:"1",}
  },
];
export const OtherCodes = [
  {
    title: "Customer Care Service",
    code: "*300#",
    icon: "call-outline",
  },
  {
    title: "Link your NIN",
    code: "*996#",
    icon: "id-card-outline",
  },
  {
    title: "Value Added Services",
    code: "*305#",
    icon: "globe-outline",
  },
];
