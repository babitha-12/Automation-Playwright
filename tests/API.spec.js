import{test,expect} from '@playwright/test'
import { request } from 'node:http'
test('GET Request-get users', async({request})=>{
const response=  await request.get('https://jsonplaceholder.typicode.com/users') //for getting data from API
expect(response.ok()).toBeTruthy() //get data values stored in the response variable. for checking the response  value is 200 ok or not is checked using tobetruthy
const body= await response.json() //to convert the API response code to json
expect(body.length).toBeGreaterThan(0) // to verify whether the data is available in body variable. if data avaiable then lenght will be >0
})

//POST Request

test('POST Request-Create data', async({request})=>{
const response=  await request.post('https://jsonplaceholder.typicode.com/users',{
    data:{
        name:'babitha',
        email:'babithatestuser@email.com'
    }
    })
    expect(response.status()).toBe(201)
}) 

//PATCH Request
test('PATCH Request- update data partially', async({request})=>{
     //updating first users email
    const response= await request.patch('https://jsonplaceholder.typicode.com/users/1',{
      //updating first users email
        data: {
            email:'updated@email.com'
        }
    })
    expect(response.status()).toBe(200)
    const responseBody= await response.json() //to convert response to json
    expect(responseBody.email).toBe('updated@email.com')
})


//PUT Request
test('PUT Request- update entire data', async({request})=>{
     //updating 11th user which was created above using post request(using post 11th user was created)
    const response= await request.put('https://jsonplaceholder.typicode.com/users/10',{
        data: {
            name:'babitha1',
            email:'babithatestuser1@email.com'
        }
    })
    expect(response.status()).toBe(200)
   
})
 // with 11th user put , the execution is failing 
 // users/11 is not working since its fake api url 11th is not working so giving 10


 //DELETE Request
 test.only('DELETE Request- delete  data', async({request})=>{
    const response= await request.delete('https://jsonplaceholder.typicode.com/users/10') 
   // const response= await request.delete('https://jsonplaceholder.typicode.com/users/10',{}) //deleting the 10th user
        expect(response.status()).toBe(200)
   
})
