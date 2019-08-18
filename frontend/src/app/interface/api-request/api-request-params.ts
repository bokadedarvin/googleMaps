export interface RESTAURANT {
    APIKEY: string;
}
export interface REQUESTPARAMS {
    MODULE: string;
    METHOD: string;
    PARAMS: object;
}
export interface ApiRequestParams {
    RESTAURANT: RESTAURANT;
    REQUESTPARAM: Array<REQUESTPARAMS>;
}
