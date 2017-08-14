import React from 'react';
import{
    Form, 
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap'


// const submitHandle = (e) => {
//     
//     console.log(this.state.search);
// };
// const handleChange = (e) => {
//     this.setState({search: e.target.value});
// };



class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({query: e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.update(this.state.query);
        this.setState({query: ''});
    }

    render(){
        // artistData(artist);
        return (
            
            <Form inline onSubmit={this.handleSubmit} >
                <FormGroup controlId="formInlineEmail">
                    <FormControl  value={this.state.query} type="search" placeholder="enter artist..."  onChange={this.handleChange}/>
                </FormGroup>
                <Button type="submit">
                    search
                </Button>
            </Form>
        );
    };
};

export default SearchForm;