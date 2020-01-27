document.addEventListener("DOMContentLoaded",async ()=>{
  // alert('Welcome');
  const accounts = await getAccounts('All');
  console.log(accounts);
  document.querySelector('#accounts-table').innerHTML=
      /*accounts.join('');*/`
   /*   { ${accounts.map(accounts=>accounts.accountNo).join('')}
          
          
          }
   */
   
   <table> 
   <tr>
   <th>
   Account Number
</th>
 <th>
   Account Type
</th>
 <th>
   Balance
</th>

${accounts.map(account => account2HTMLRow(account)).join('')}


</tr>
   
   
   
   </table>
   
   
   
   
   
   
   
      
      `


})

function account2HTMLRow(account){
    return `
    <tr>
     <th>
   ${account.accountNo}
</th> <th>
   ${account.acctType}
</th>
    
     <th>
   ${account.balance}
</th>
    
</tr>
    
    
    
    `


}
    async function getAccounts(accType){
      try {
        const data = await  fetch(`/api/accounts?acctType=${accType}`);
          return data.json();

      }
      catch(e){
          console.log(e);
      }
    }













