/*
File: siteNav.jsx
Description: file exports the SiteNavigator React Component which implements the site navigation menu 
                contained in the upper right hand corner of the application

IMPORTANT!!! If you are reading this from within a .js file,   EXIT THE FILE!!!   Go to the jsx/components directory 
    and find siteNav.jsx.  React is Transpiled from JSX, unless you are familiar with React, you will not
    understand anything about the file unless you read the JSX file which is declarative and self documenting 

    it is important to note that you should not 
	make any changes to that file if you wish to edit the PyGoat client, instead follow the directions on 
	the README.md contained within the static directory. Make sure any editing is done with the .jsx version
	of this file inside the static/jsx directory

Conventions followed:
    4-space tabs
    always place semicolons
    trailing commas in arrays and objects
    3 empty lines between classes and functions
    2 empty lines between methods
    Class methods always return this unless other return value desired
    Annotations follow the convention:     
            function/method  ::  (parameter types) -> (return types)
*/

'use strict';

const SiteNavigator = props => {

    const navStyle = {
        color: 'black',
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundColor: '#ffd200',
        height: props.height,
        marginLeft: 'auto',
        marginRight: '0px',
        width: '140px'
    };

    return React.createElement(
        'div',
        { style: navStyle },
        props.children
    );
};

export { SiteNavigator };