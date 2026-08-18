export const CREDIT_COSTS={copy:1,image:4,video:12} as const;
export type CreditType=keyof typeof CREDIT_COSTS;
export function creditCost(type:CreditType){return CREDIT_COSTS[type]}
