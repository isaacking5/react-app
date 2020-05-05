import {
  API_SUCCESS,
  API_FAILED,
  API_FETCHING,
  API_INITIAL
} from "@ib/api-constants";

import "@testing-library/jest-dom/extend-expect";
import Cookie from "js-cookie";
import getUserSignInResponse from "../fixtures/getUserSignInResponse.json";
import AuthServices from "../services/AuthServices/index.api";
import AuthStore from "../stores/AuthStore/index";


let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();
let mockGetCookie = jest.fn();

Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;
Cookie.get = mockGetCookie;

global.mockSetCookie = mockSetCookie;
global.mockRemoveCookie = mockRemoveCookie;
global.mockGetCookie = mockGetCookie;
describe("AuthStore Tests", () => {
  let authAPI;
  let authStore;

  beforeEach(() => {
    authAPI = new AuthServices();
    authStore = new AuthStore(authAPI);
  });

  it("should test initialising auth store", () => {
    expect(authStore.getAuthApiStatus).toBe(API_INITIAL);
    expect(authStore.getAuthApiError).toBe(null);
  });

  it("should test userSignInAPI data fetching state", () => {
    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authAPI.getAuthAPI = mockSignInAPI;

    authStore.getAuthAPI();
    expect(authStore.getAuthApiStatus).toBe(API_FETCHING);
  });

  it("should test userSignInAPI success state", async () => {
    const requestObject = {
      username: "test-user",
      password: "test-password"
    };

    const mockSuccessPromise = new Promise(function(resolve, reject) {
      resolve(getUserSignInResponse);
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authAPI.getAuthAPI = mockSignInAPI;

    await authStore.getAuthAPI();
    expect(authStore.getAuthApiStatus).toBe(API_SUCCESS);
    expect(mockSetCookie).toBeCalled();
  });

  it("should test userSignInAPI failure state", async () => {

    const mockFailurePromise = new Promise(function(resolve, reject) {
      // reject();
      reject(new Error("error"));
    });

    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockFailurePromise);
    authAPI.getAuthAPI = mockSignInAPI;

    authStore = new AuthStore(authAPI);
    await authStore.getAuthAPI(requestObject, onSuccess, onFailure);

    expect(authStore.getAuthApiStatus).toBe(API_FAILED);
    expect(authStore.getAuthApiError).toBe("error");
  });

  it("should test user sign-out", () => {
    authStore.userSignOut();
    expect(mockRemoveCookie).toBeCalled();
    expect(authStore.getAuthApiStatus).toBe(API_INITIAL);
    expect(authStore.getAuthApiError).toBe(null);
    
  });
});