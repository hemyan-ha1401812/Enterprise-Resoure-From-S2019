const express = require('express');
const accountRepo = require('./repository/account-repository');
const router = express.Route;



router.get('/api/accounts/:acctType ', async(req, res)=> {

    const accounts = await accountRepo.getAccount(req.params.acctType);
    res.json(accounts);
});

router.get('/', async(req, res)=> {

    const accId = req.params.acctId;
    const account = await accountRepo.getAccount(accountNo);
    res.json(account);
});

router.post('/api/accounts  ',async (req, res)=> {
    const account = req.body;
    await accountRepo.addAccount(account);
    res.status(201).send('Account Created');

});


router.put('/api/accounts/:id', async (req, res)=> {
    const accNo = req.params.id;
    const account =req.body;
   await accountRepo.addAccount(accNo);
    res.send('Account Updated');

});


router.delete('/api/accounts/:id',async (req, res)=> {
    const accNo = req.params.id;
    const account =req.body;
    await accountRepo.deleteAccount(accNo);
    res.send('Account Deleted');
});







module.exports=router;


