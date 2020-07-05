const PREFIX = 'COMMON';

export const FINISH_REHYDRATE = `${PREFIX}/FINISH_REHYDRATE`;
export const REDIRECT_APP = `${PREFIX}/REDIRECT_APP`;

export const finishRehydrate = () => ({
  type: FINISH_REHYDRATE,
});

export const redirectApp = () => ({
  type: REDIRECT_APP,
});
