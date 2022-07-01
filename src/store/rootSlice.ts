/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export type FormUserSignupProps = {
  formStage: number;
  formUserSignup: {
    email: string;
    name: string;
    phone: string;
    agreedTerms: boolean;
  },
  formEnterpriseSignup: {
    segment: string;
    type: string;
    cnpj: string;
    socialName: string;
    phone: string;
    cep: string;
    address: string;
    number: string;
    complement: string;
    block: string;
  }
}

const rootSlice = createSlice({
  name: 'root',

  initialState: {
    formStage: 1,
    formUserSignup: {
      email: '',
      name: '',
      phone: '',
      agreedTerms: false,
    },
    formEnterpriseSignup: {
      segment: '',
      type: '',
      cnpj: '',
      socialName: '',
      phone: '',
      cep: '',
      address: '',
      number: '',
      complement: '',
      block: '',
    },
  },

  reducers: {
    formStage: (state, action) => {
      state.formStage = action.payload;
    },
    formSignup: (state, action) => {
      state.formUserSignup = action.payload;
    },
    formEnterpriseSignup: (state, action) => {
      state.formEnterpriseSignup = action.payload;
    },
  },
});

export const { formStage, formSignup, formEnterpriseSignup } = rootSlice.actions;
export const { reducer, caseReducers } = rootSlice;
