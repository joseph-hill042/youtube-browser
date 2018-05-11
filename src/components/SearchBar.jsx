import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Search from 'material-ui/svg-icons/action/search';
import { yellow100 } from 'material-ui/styles/colors';


const styles = {
    underlineStyle: {
        borderColor: yellow100,
    },
    floatingLabelStyle: {
        color: '#fff',
    },
    floatingLabelFocusStyle: {
        color: yellow100    ,
    },
};

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <AppBar
                title='Youtube Browser'
                iconElementRight={
                    <span>
                        <TextField
                            onChange={e => this.setState({ term: e.target.value })}
                            floatingLabelText="Search Videos"
                            underlineFocusStyle={styles.underlineStyle}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        />
                        <FloatingActionButton mini={true}>
                            <Search/>
                        </FloatingActionButton>
                    </span>
                }
            />
        )
    }
}

export default SearchBar;