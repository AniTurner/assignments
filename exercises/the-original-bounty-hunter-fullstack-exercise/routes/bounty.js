const express = require("express")
const bountyRouter = express.Router()
const uuid = require('uuid/v4')

let bounties = [
    {
        firstName: 'K-2SO',
        lastName: '',
        isAlive: false,
        bountyAmountInMillion: 5,
        species: 'Droid',
        sideOfTheForce: 'light',
        _id: uuid()
    },
    {
        firstName: 'Rey',
        lastName: '',
        isAlive: true,
        bountyAmountInMillion: 13,
        species: 'Human',
        sideOfTheForce: 'light',
        _id: uuid()
    },
    {
        firstName: 'Princess',
        lastName: 'Leia',
        isAlive: true,
        bountyAmountInMillion: 22,
        species: 'Human',
        sideOfTheForce: 'light',
        _id: uuid()
    },
    {
        firstName: 'Lyra',
        lastName: 'Erso',
        isAlive: false,
        bountyAmountInMillion: 10,
        species: 'Human',
        sideOfTheForce: 'light',
        _id: uuid()
    },
    {
        firstName: 'Orson',
        lastName: 'Krennic',
        isAlive: false,
        bountyAmountInMillion: 12,
        species: 'Human',
        sideOfTheForce: 'dark',
        _id: uuid()
    }
]





//Routes
bountyRouter.route('/search')
    .get((req, res) => {
        const {isAlive, species, sideOfTheForce} = req.query
        if(isAlive && type) {
            const foundBounties = bounties.filter( bounty => {
                if(bounty.isAlive.toString() === isAlive && bounty.species.toString() === species && bounty.sideOfTheForce.toString() === sideOfTheForce) {
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
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(newBounty)
    })


bountyRouter.route('/:_id')
    .get((req, res) => {
        const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
        res.send(foundBounty)
    })
    .put((req, res) => {
        const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
        Object.assign(foundBounty, req.body)
        res.send(foundBounty)
    })
    .delete((req, res) => {
        const updatedDB = bounties.filter(bounty => bounty._id !== req.params._id)
        bounties = updatedDB
        res.send("Bounty successfully deleted")
    })



module.exports = bountyRouter
