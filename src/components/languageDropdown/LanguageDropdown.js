import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {settingsActions} from "../../store/settings/settingsSlice";
import {useDispatch, useSelector} from "react-redux";
import {Language} from "../../constants/Language";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const languages = [
    {id:1,code:"en",name:"English"},
    {id:2,code:"tr",name:"Türkçe"}
]

function LanguageDropdown(props) {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const {language,theme} = useSelector(state=>state.settings)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (item) =>{
        handleClose()
        dispatch(settingsActions.changeLanguage(Language[item.code]))
    }

    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={`${theme.navbar.text}`}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{textTransform: 'capitalize'}}
            >
                {
                    language.name
                }
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    languages.map((item)=>{
                        return(
                            <MenuItem key={item.id} onClick={()=>changeLanguage(item)}>{item.name}</MenuItem>
                        )
                    })


                }
            </Menu>
        </>
    );
}

export default LanguageDropdown;