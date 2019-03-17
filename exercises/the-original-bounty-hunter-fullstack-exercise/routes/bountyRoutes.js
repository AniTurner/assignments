const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')


//Routes

//SEARCH OPTION -- need to work on this more

// bountyRouter.get('/search', (req, res, next) => {
//     Bounty.find((err, bounties) => {
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(bounties)
//         const {isAlive, sideOfTheForce} = req.query
//         if(isAlive && sideOfTheForce) {

//         }
//     })
// })
//     .get((req, res) => {
//         const {isAlive, sideOfTheForce} = req.query
//         if(isAlive && type) {
//             const foundBounties = bounties.filter( bounty => {
//                 if(bounty.isAlive.toString() === isAlive && bounty.sideOfTheForce.toString() === sideOfTheForce) {
//                     return bounty
//                 }
//             })
//             res.send(foundBounties)
//         } else if(isAlive) {
//             const foundBounties = bounties.filter( bounty => {
//                 if(bounty.isAlive.toString() === isAlive) {
//                     return bounty
//                 } 
//             })
//             res.send(foundBounties)
//         } else if (species) {
//             const foundBounties = bounties.filter( bounty => {
//                 if (bounty.species.toString() === species) {
//                     return bounty
//                 }
//             })
//             res.send(foundBounties)
//         } else if (sideOfTheForce) {
//             const foundBounties = bounties.filter( bounty => {
//                 if (bounty.sideOfTheForce.toString() === sideOfTheForce) {
//                     return bounty
//                 }
//             })
//             res.send(foundBounties)
//         }
//     })

bountyRouter.route('/')
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
        
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, newBountyObj) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newBountyObj)
        })
    })

//GET one & Update one
bountyRouter.route('/:_id')
    .get((req, res, next) => {
        Bounty.findOne({_id: req.params._id}, (err, foundBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundBounty)
        })
    })
    .put((req, res, next) => {
        Bounty.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, updatedBounty) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
            }
        )
    })
    .delete((req, res, next) => {
        Bounty.findOneAndRemove({_id: req.params._id}, (err, deletedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(202).send(`You successfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName}`)
        })
    })



module.exports = bountyRouter
