import React from 'react'
import Box from './Box.js'

function App() {

    const obj1 = {
        backgroundColor: 'yellow',
        title: 'Yellow',
        subtitle: 'color',
        information: 'like the sun'
    }

    const obj2 = {
        backgroundColor: 'red',
        title: 'Red',
        subtitle: 'color',
        information: 'like the heart'
    }

    const obj3 = {
        backgroundColor: 'green',
        title: 'Green',
        subtitle: 'color',
        information: 'like grass'
    }

    const obj4 = {
        backgroundColor: 'blue',
        title: 'Blue',
        subtitle: 'color',
        information: 'like the sky'
    }

    const obj5 = {
        backgroundColor: 'pink',
        title: 'Pink',
        subtitle: 'color',
        information: 'like a pig'
    }

    const obj6 = {
        backgroundColor: 'orange',
        title: 'Orange',
        subtitle: 'color',
        information: 'like an orange'
    }

    const obj7 = {
        backgroundColor: 'brown',
        title: 'Brown',
        subtitle: 'color',
        information: 'like poop'
    }

    const obj8 = {
        backgroundColor: 'white',
        title: 'White',
        subtitle: 'color',
        information: 'like snow'
    }

    const obj9 = {
        backgroundColor: 'teal',
        title: 'Teal',
        subtitle: 'color',
        information: 'like the ocean'
    }

    const obj10 = {
        backgroundColor: 'purple',
        title: 'Purple',
        subtitle: 'color',
        information: 'like grapes'
    }




    return (
        <div>
            <Box style={obj1.backgroundColor} title = {obj1.title} subtitle={obj1.subtitle} information={obj1.information}/>
            <Box style={obj2.backgroundColor} title = {obj2.title} subtitle = {obj2.subtitle} information = {obj2.information}/>
            <Box style={obj3.backgroundColor} title = {obj3.title} subtitle = {obj3.subtitle} information = {obj3.information}/>
            <Box style={obj4.backgroundColor} title = {obj4.title} subtitle = {obj4.subtitle} information = {obj4.information}/>
            <Box style={obj5.backgroundColor} title = {obj5.title} subtitle = {obj5.subtitle} information = {obj5.information}/>
            <Box style={obj6.backgroundColor} title = {obj6.title} subtitle = {obj6.subtitle} information = {obj6.information}/>
            <Box style={obj7.backgroundColor} title = {obj7.title} subtitle = {obj7.subtitle} information = {obj7.information}/>
            <Box style={obj8.backgroundColor} title = {obj8.title} subtitle = {obj8.subtitle} information = {obj8.information}/>
            <Box style={obj9.backgroundColor} title = {obj9.title} subtitle = {obj9.subtitle} information = {obj9.information}/>
            <Box style={obj10.backgroundColor} title = {obj10.title} subtitle = {obj10.subtitle} information = {obj10.information}/>

        </div>
    )
}


export default App;