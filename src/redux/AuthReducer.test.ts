import {AuthDataType, AuthGlobalDataType} from "./State";
import AuthReducer, {changeAuthFetching, setUserData} from "./AuthReducer";

const testInitialAuthData = {
    resultCode: 0,
    messages: [],
    data: {
        id: 1,
        email: '',
        login: ''
    },
    isFetching: true,
    isLogined: false
}


test('AuthData must be changed', () => {
    let testData =  {
        id: 123,
        email: 'asd',
        login: 'zxc'
    }
    let newState = AuthReducer(testInitialAuthData,setUserData(testData,true))
    expect(newState).toStrictEqual({
        resultCode: 0,
        messages: [],
        data: {
            id: 123,
            email: 'asd',
            login: 'zxc'
        },
        isFetching: true,
        isLogined: true
    })
    expect(newState.isLogined).toBe(true)
})

test('Auth fetching must be reversed', () => {
    let newState = AuthReducer(testInitialAuthData,changeAuthFetching(false))
    expect(newState.isFetching).toBe(false)
    let newState2 = AuthReducer(testInitialAuthData,changeAuthFetching(true))
    expect(newState2.isFetching).toBe(true)
})
