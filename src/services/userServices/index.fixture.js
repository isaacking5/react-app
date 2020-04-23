import usersResponse from '../../fixtures/getUsersResponse.json'

class UserFixtureServices{
    getUsersAPI(){
        return new Promise((resolve, reject) =>{
            resolve(usersResponse)
        })
    }

}


export default UserFixtureServices