import React from 'react';
import CardList from '../../components/card-list';
import SearchBox from '../../components/search-box';
import './home.styles.css'

class Home extends React.Component {
    
    constructor() {
        super()
        this.state = {
            users: [],
            searchField:''
        }

    }

    onSearchchange = (event) =>{
        //
        console.Log(event.target.value)
        this.setState({searchField:event.target.value})
    }
    

    componentDidMount() {

        // To get the data from API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setState({ users: result }))
    }

    render() {
        let filterUsers = this.state.users.filter((user) => 
            user.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        )
        return (
            <div className='app'>
                <h1>Welcome to Rollodex</h1>
     
                <SearchBox change = {this.onSearchchange} />
                <CardList list={filterUsers}/>              
            </div>

        )
    }

}
export default Home