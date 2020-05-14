import {
  API_SUCCESS,
  API_FAILED,
  API_FETCHING,
  API_INITIAL
} from "@ib/api-constants";

import "@testing-library/jest-dom/extend-expect";
import Cookie from "js-cookie";
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";
import AuthServices from "../../services/AuthServices/index.api";
import AuthStore from "./index";


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
    const onSuccess = jest.fn();
    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    
    authAPI.signInAPI = mockSignInAPI;
    authStore.getAuthAPI(onSuccess);
    expect(authStore.getAuthApiStatus).toBe(API_FETCHING);
    expect(onSuccess).not.toBeCalled();
  });

  it("should test userSignInAPI success state", async () => {
    const onSuccess = jest.fn();
    const mockSuccessPromise = new Promise(function(resolve, reject) {
      resolve(getUserSignInResponse);
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authAPI.signInAPI = mockSignInAPI;

    await authStore.getAuthAPI(onSuccess);
    expect(authStore.getAuthApiStatus).toBe(API_SUCCESS);
    expect(mockSetCookie).toBeCalled();
    expect(onSuccess).toBeCalled();
  });

  it("should test userSignInAPI failure state", async () => {
    const onSuccess = jest.fn();
    const mockFailurePromise = new Promise(function(resolve, reject) {
      reject(new Error("error"));
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockFailurePromise);
    authAPI.signInAPI = mockSignInAPI;
    await authStore.getAuthAPI(onSuccess);
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