import React, {Component} from 'react'
import axios from 'axios'

const UglyThingsContext = React.createContext()

class UglyThingsProvider extends Component {
    constructor() {
        super()
        this.state = {
            uglythings: []
        }
        this.url = 'https://api.vschool.io/ani/todo'
    }

    getUglyThings = () => {
        axios.get(this.url).then(response => {
            this.setState({
                uglythings: response.data
            })
        }).catch(error => console.log(error))
    }

    addUglyThings = (inputs) => {
        const { title, imgUrl, description } = inputs
        const newUglyThings = { title, imgUrl, description }

        axios.post(this.url, newUglyThings).then(response => {
            this.setState(prevState => {
                return {
                    uglythings: [response.data, ...prevState.uglythings]
                }
            })
        }).catch(error => console.log(error))
    }

    handleDelete = (_id) => {
        axios.delete(`${this.url}/${_id}`).then(response => {
            this.setState(prevState => {
                return {
                    uglythings: prevState.uglythings.filter(uglything => uglything._id) !== _id
                }
            })
        }).catch(error => console.log(error))
    }

    handleEdit = (_id, updates) => {
        axios.put(`${this.url}/${_id}`, updates)
            .then(response => {
                const updatedUglyThings = response.data
                this.setState(prevState => {
                    return {
                        uglythings: prevState.uglythings.map(uglything => uglything._id === _id ? updatedUglyThings : uglything)
                    }
                })
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <UglyThingsContext.Provider
                value={{
                    uglythings: this.state.uglythings,
                    getUglyThings: this.getUglyThings,
                    addUglyThings: this.addUglyThings,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit
                }}>
                {this.props.children}
            </UglyThingsContext.Provider>
        
        )
    }
}

export const withUglyThings = C => props => (
    <UglyThingsContext.Consuler>
        {value => <C {...props} {...value}/>}
    </UglyThingsContext.Consuler>
)

export default UglyThingsProvider