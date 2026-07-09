const XLSX=require('xlsx') //library importing -> To read data from excel

function getTestData(){ //It is a user defined function, when we call it -> It will give excel data
    const workBook=XLSX.readFile('TestData/TestData.xlsx') // Opens your excel file in the specified location
    const sheet=workBook.Sheets['LoginPage'] // To access the sheet in the excel
    //const data=XLSX.utils.sheet_to_json(sheet) // we are converting the data to json format
    const data=XLSX.utils.sheet_to_json(sheet,{raw:false})// we are converting the data to json format,
    // To read the data from as it is even if we give numerics
    return data // sends the data back when the function is called
}

module.exports={getTestData} //Makes the function available in other files