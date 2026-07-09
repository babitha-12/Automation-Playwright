const XLSX=require('xlsx') 

function getCellData(row, column){ 
    const workBook=XLSX.readFile('TestData/TestData.xlsx') 
    const sheet=workBook.Sheets['LoginPage'] 
    const cellAddress=XLSX.utils.encode_cell({ //encode function used to get data against each row , column
        r:row-1, 
        c:column-1
    }) //encode funciton reads from 0. but excel starts from 1. so for corretcing index value -1 given
    const cell=sheet[cellAddress] // cell details are saved to cell
    return cell?cell.v:undefined
    }
module.exports={getCellData} 
