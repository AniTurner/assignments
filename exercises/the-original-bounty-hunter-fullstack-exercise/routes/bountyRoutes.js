const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')
// const uuid = require('uuid/v4')

// let bounties = [
//     {
//         firstName: 'K-2SO',
//         lastName: '',
//         isAlive: false,
//         bountyAmountInMillion: 5,
//         species: 'Droid',
//         sideOfTheForce: 'light',
//         _id: uuid()
//     },
//     {
//         firstName: 'Rey',
//         lastName: '',
//         isAlive: true,
//         bountyAmountInMillion: 13,
//         species: 'Human',
//         sideOfTheForce: 'light',
//         _id: uuid()
//     },
//     {
//         firstName: 'Princess',
//         lastName: 'Leia',
//         isAlive: true,
//         bountyAmountInMillion: 22,
//         species: 'Human',
//         sideOfTheForce: 'light',
//         _id: uuid()
//     },
//     {
//         firstName: 'Lyra',
//         lastName: 'Erso',
//         isAlive: false,
//         bountyAmountInMillion: 10,
//         species: 'Human',
//         sideOfTheForce: 'light',
//         _id: uuid()
//     },
//     {
//         firstName: 'Orson',
//         lastName: 'Krennic',
//         isAlive: false,
//         bountyAmountInMillion: 12,
//         species: 'Human',
//         sideOfTheForce: 'dark',
//         _id: uuid()
//     }
// ]





//Routes
//GET, POST, DELETE
bountyRouter.get('/search', (req, res) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        const {isAlive, sideOfTheForce} = req.query
        if(isAlive && sideOfTheForce) {

        }
    })
})
    .get((req, res) => {
        const {isAlive, sideOfTheForce} = req.query
        if(isAlive && type) {
            const foundBounties = bounties.filter( bounty => {
                if(bounty.isAlive.toString() === isAlive && bounty.sideOfTheForce.toString() === sideOfTheForce) {
                    return bounty
                }
            })
            res.send(foundBounties)
        } else if(isAlive) {
            const foundBounties = bounties.filter( bounty => {
                if(bounty.isAlive.toString() === isAlive) {
                    return bounty
                } 
            })
            res.send(foundBounties)
        } else if (species) {
            const foundBounties = bounties.filter( bounty => {
                if (bounty.species.toString() === species) {
                    return bounty
                }
            })
            res.send(foundBounties)
        } else if (sideOfTheForce) {
            const foundBounties = bounties.filter( bounty => {
                if (bounty.sideOfTheForce.toString() === sideOfTheForce) {
                    return bounty
                }
            })
            res.send(foundBounties)
        }
    })

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
