import React from 'react';
import {useSelector} from "react-redux";
import LanguageDropdown from "../languageDropdown/LanguageDropdown";
import Container from "../container/Container";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";

function Header() {
    const {language,theme} = useSelector(state=>state.settings)
    return (
        <div className={`${theme.bgDark}`}>
            <Container>
                <div className="flex items-center justify-between px-5">
                    <div className={`${theme.textLightFaded}`}>{language.todoList}</div>
                    <div className="flex items-center">
                        <ThemeSwitch/>
                        <LanguageDropdown/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Header;