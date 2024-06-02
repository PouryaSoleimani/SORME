//^ RECOIL ATOMS FILE
"use client"
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

//ATOMS ============================================================================================================

export const ALLPRODUCTS = atom({ key: 'allProducts', default: [], effects_UNSTABLE: [persistAtom], });
export const SHOPPINGCART = atom({ key: 'shoppingcart', default: [], effects_UNSTABLE: [persistAtom], });