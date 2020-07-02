import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as types from "../../src/actions/types";
import configureStore from "redux-mock-store";
import { render, cleanup, fireEvent } from "react-native-testing-library";
import Login from "../../src/screens/Login";

afterEach(cleanup);
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('login', () => {
  const state = { login: { email: "", password: "", error: "", loading: false }}

  it('renders correctly', () => {
    const store = mockStore(state);
    const tree = render(<Provider store={store}><Login /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should dispatch the login action', () => {
    const store = mockStore(state);
    const tree = render(<Provider store={store}><Login /></Provider>);
    const signInButtonComponent = tree.getByText("SIGN IN");
    
    fireEvent(signInButtonComponent, "press");

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toEqual(types.LOGIN_USER);
  })

  it('should dispatch the email changed action', () => {
    const store = mockStore(state);
    const tree = render(<Provider store={store}><Login /></Provider>);
    const emailInputComponent = tree.getByPlaceholder("EMAIL");
    
    fireEvent.changeText(emailInputComponent, "testing@testing.com");

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toEqual(types.EMAIL_CHANGED);
  })

  it('should dispatch the password changed action', () => {
    const store = mockStore(state);
    const tree = render(<Provider store={store}><Login /></Provider>);
    const passwordInputComponent = tree.getByPlaceholder("PASSWORD");
    
    fireEvent.changeText(passwordInputComponent, "testingpassword");

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toEqual(types.PASSWORD_CHANGED);
  })
})