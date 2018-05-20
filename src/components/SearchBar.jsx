import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

const style = {
    display: 'flex',
    justifyContent: 'space-between'
};

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
                <AppBar>
                    <div style={style}>
                        <Typography variant="title" color="inherit">
                            Youtube Browser
                        </Typography>
                        <span>
                        <TextField
                            onChange={e => this.onInputChange(e.target.value )}
                            label="Search Videos"
                        />
                        <Button mini variant="fab" color="primary">
                            <Search/>
                        </Button>
                    </span>
                    </div>
                </AppBar>
        )
    }
}

export default SearchBar;